// Lecteur de démo animée d'un dashboard : une souris se déplace sur les segments,
// clique, et l'image du tableau de bord change (états pré-capturés, aucune donnée réelle).
import { ICONS } from "../../core/icons.js";
import { CONTACT } from "../../core/config.js";

const MOVE_MS = 1150;
const CLICK_MS = 260;
const HOLD_MS = 3200;

let root = null;
let project = null;
let idx = 0;
let playing = false;
let timers = [];
let frontImg = 0;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function q(sel){ return root.querySelector(sel); }
function later(fn, ms){ const t = setTimeout(fn, ms); timers.push(t); return t; }
function clearTimers(){ timers.forEach(clearTimeout); timers = []; }

function build(){
  root = document.createElement("div");
  root.className = "demo-modal";
  root.setAttribute("aria-hidden", "true");
  root.innerHTML = `
    <div class="demo-backdrop" data-demo-close></div>
    <div class="demo-box" role="dialog" aria-modal="true" aria-labelledby="demoTitle">
      <button class="demo-close" type="button" data-demo-close aria-label="Fermer la démo">
        <svg viewBox="0 0 24 24" class="ic"><path fill="currentColor" d="m6.4 5 12.6 12.6-1.4 1.4L5 6.4 6.4 5Zm12.6 1.4L6.4 19 5 17.6 17.6 5 19 6.4Z"/></svg>
      </button>
      <div class="demo-head">
        <span class="demo-badge" id="demoBadge"></span>
        <h3 id="demoTitle"></h3>
      </div>
      <div class="demo-stage" id="demoStage">
        <img class="demo-img on" alt="" decoding="async">
        <img class="demo-img" alt="" decoding="async">
        <span class="demo-ripple"></span>
        <span class="demo-cursor"><svg viewBox="0 0 24 24" width="28" height="28"><path d="M3 2l7.6 19.2 2.7-7.8 7.8-2.6z" fill="#fff" stroke="#0b0e18" stroke-width="1.6" stroke-linejoin="round"/></svg></span>
        <button class="demo-fs" type="button" aria-label="Plein écran">${ICONS.expand}<span>Plein écran</span></button>
      </div>
      <div class="demo-caption">
        <strong id="demoLabel"></strong>
        <span id="demoDetail"></span>
      </div>
      <div class="demo-controls">
        <button class="doc-nav" type="button" id="demoPrev" aria-label="Étape précédente"><svg viewBox="0 0 24 24" class="ic"><path fill="currentColor" d="M15.4 6 9.4 12l6 6-1.4 1.4L6.6 12l7.4-7.4L15.4 6Z"/></svg></button>
        <button class="doc-nav demo-play" type="button" id="demoPlay" aria-label="Pause"></button>
        <button class="doc-nav" type="button" id="demoNext" aria-label="Étape suivante"><svg viewBox="0 0 24 24" class="ic"><path fill="currentColor" d="M8.6 6 14.6 12l-6 6 1.4 1.4L17.4 12 10 4.6 8.6 6Z"/></svg></button>
        <div class="demo-steps" id="demoSteps"></div>
      </div>
      <p class="demo-note">Démo animée à partir de captures du classeur Excel · données entièrement fictives.
        <a id="demoContact" target="_blank" rel="noopener">Demander le fichier complet</a></p>
    </div>`;
  document.body.appendChild(root);

  root.addEventListener("click", (e) => {
    if(e.target.closest("[data-demo-close]")) close();
    else if(e.target.closest(".demo-fs")) toggleFullscreen();
    else if(e.target.closest("#demoPlay")) togglePlay();
    else if(e.target.closest("#demoPrev")) manual(idx - 1);
    else if(e.target.closest("#demoNext")) manual(idx + 1);
    else { const b = e.target.closest("[data-step]"); if(b) manual(Number(b.dataset.step)); }
  });
  document.addEventListener("keydown", (e) => {
    if(!isOpen()) return;
    if(e.key === "Escape" && !document.fullscreenElement) close();
    else if(e.key === "ArrowLeft") manual(idx - 1);
    else if(e.key === "ArrowRight") manual(idx + 1);
    else if(e.key === " "){ e.preventDefault(); togglePlay(); }
  });
  if(!document.fullscreenEnabled) q(".demo-fs").hidden = true;
}

function isOpen(){ return root && root.getAttribute("aria-hidden") === "false"; }

function setImage(n){
  const imgs = root.querySelectorAll(".demo-img");
  const next = imgs[1 - frontImg];
  next.src = project.demo.images[n];
  imgs[frontImg].classList.remove("on");
  next.classList.add("on");
  frontImg = 1 - frontImg;
}

function moveCursor(step, instant){
  const c = q(".demo-cursor");
  c.style.transitionDuration = instant || reduceMotion ? "0ms" : MOVE_MS + "ms";
  c.style.left = step.x + "%";
  c.style.top = step.y + "%";
  const r = q(".demo-ripple");
  r.style.left = step.x + "%";
  r.style.top = step.y + "%";
}

function ripple(){
  const r = q(".demo-ripple");
  r.classList.remove("go"); void r.offsetWidth; r.classList.add("go");
  q(".demo-cursor").classList.add("press");
  later(() => q(".demo-cursor").classList.remove("press"), 220);
}

function caption(step){
  q("#demoLabel").textContent = step.label;
  q("#demoDetail").textContent = step.detail;
  root.querySelectorAll("[data-step]").forEach(b => b.classList.toggle("active", Number(b.dataset.step) === idx));
}

function goTo(i, { auto } = {}){
  const steps = project.demo.steps;
  idx = (i + steps.length) % steps.length;
  const step = steps[idx];
  clearTimers();
  const prev = steps[(idx - 1 + steps.length) % steps.length];
  // image affichée pendant que la souris se déplace : celle de l'étape précédente
  if(step.click && !auto) setImage(prev.img);
  moveCursor(step, false);
  const arrive = reduceMotion ? 0 : MOVE_MS + 80;
  later(() => {
    if(step.click){ ripple(); later(() => { setImage(step.img); caption(step); }, CLICK_MS); }
    else { setImage(step.img); caption(step); }
    if(playing) later(() => goTo(idx + 1, { auto: true }), (step.click ? CLICK_MS : 0) + HOLD_MS);
  }, arrive);
  if(step.click) root.querySelectorAll("[data-step]").forEach(b => b.classList.toggle("active", Number(b.dataset.step) === idx));
}

function manual(i){
  playing = false; updatePlayIcon();
  goTo(i);
}

function updatePlayIcon(){
  const b = q("#demoPlay");
  b.setAttribute("aria-label", playing ? "Pause" : "Lecture");
  b.innerHTML = playing
    ? `<svg viewBox="0 0 24 24" class="ic"><path fill="currentColor" d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>`
    : `<svg viewBox="0 0 24 24" class="ic"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>`;
}

function togglePlay(){
  playing = !playing; updatePlayIcon();
  if(playing) goTo(idx + 1, { auto: true }); else clearTimers();
}

function toggleFullscreen(){
  const stage = q("#demoStage");
  if(document.fullscreenElement) document.exitFullscreen();
  else stage.requestFullscreen?.().catch(() => {});
}

export function openDashboardDemo(p){
  if(!root) build();
  project = p;
  const steps = p.demo.steps;
  q("#demoBadge").textContent = p.category || "Dashboard";
  q("#demoTitle").textContent = p.title;
  q("#demoSteps").innerHTML = steps.map((s, i) => i === 0 ? "" :
    `<button type="button" class="demo-step" data-step="${i}" title="${s.label}"><span>${i}</span></button>`).join("");
  const msg = `Bonjour Edem, j'ai vu la démo du dashboard "${p.title}" sur votre portfolio et je souhaiterais en savoir plus.`;
  q("#demoContact").href = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  p.demo.images.forEach(src => { new Image().src = src; });
  clearTimers();
  frontImg = 0;
  const imgs = root.querySelectorAll(".demo-img");
  imgs[0].src = p.demo.images[steps[0].img]; imgs[0].classList.add("on"); imgs[1].classList.remove("on");
  idx = 0; caption(steps[0]);
  moveCursor(steps[0], true);
  playing = !reduceMotion; updatePlayIcon();
  root.setAttribute("aria-hidden", "false");
  document.body.classList.add("doc-modal-open");
  if(playing) later(() => goTo(1, { auto: true }), 1400);
}

function close(){
  clearTimers(); playing = false;
  if(document.fullscreenElement) document.exitFullscreen();
  root.setAttribute("aria-hidden", "true");
  document.body.classList.remove("doc-modal-open");
}
