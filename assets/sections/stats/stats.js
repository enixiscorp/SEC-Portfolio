// Rendu des indicateurs chiffrés.
//
// Sur grand écran (et sans préférence "mouvement réduit") : les cartes démarrent empilées
// au centre ("pile de cartes"), puis se distribuent en alternance droite/gauche pour former
// un cercle qui tourne en continu dès que la section entre dans l'écran (IntersectionObserver).
// Survoler une carte l'affiche en gros plan et met le cercle en pause. Quand la section quitte
// l'écran, les cartes reviennent se ranger en pile (l'inverse de l'animation d'entrée).
//
// Sur petit écran ou avec "mouvement réduit" activé : repli sur une grille statique classique,
// identique dans l'esprit à l'ancien design (aucune animation d'orbite).
import { ICONS } from "../../core/icons.js";
import { STATS } from "./stats.data.js";

function iconForStat(s){
  const num = s.num.toLowerCase();
  const label = s.label.toLowerCase();
  if(num.includes("%")) return ICONS.percent;
  if(label.includes("marché") || label.includes("pays")) return ICONS.globe;
  if(label.includes("fcfa") || label.includes("gmv") || label.includes("bonus")) return ICONS.coins;
  if(label.includes("incident")) return ICONS.shield;
  if(label.includes("temps")) return ICONS.clock;
  if(label.includes("département")) return ICONS.building;
  if(label.includes("coursier") || label.includes("utilisateur") || label.includes("profil") || label.includes("client") || label.includes("collaborateur")) return ICONS.people;
  return ICONS.target;
}

function statCardHTML(s, revealOnScroll){
  const marketsHtml = s.markets ? `
    <div class="stat-markets">
      <span class="stat-markets-preview">(${s.markets.slice(0, 3).join(", ")}, …)</span>
      <span class="stat-markets-full">(${s.markets.join(", ")})</span>
    </div>
    <button class="stat-toggle" type="button" data-more="Voir tous les marchés" data-less="Voir moins">
      <span class="stat-toggle-label">Voir tous les marchés</span>
      <svg class="ic-chev" viewBox="0 0 24 24"><path fill="currentColor" d="M7 10l5 5 5-5z"/></svg>
    </button>
  ` : ``;
  return `
  <div class="stat-card" ${revealOnScroll ? "data-reveal" : ""}>
    <div class="stat-icon">${iconForStat(s)}</div>
    <div class="stat-num" data-count="${s.num}">0</div>
    <div class="stat-label">${s.label}</div>
    ${marketsHtml}
  </div>
`;
}

// Angle (en degrés, 0 = haut, sens horaire positif) pour l'index i parmi N cartes,
// en alternant une carte vers la droite puis une vers la gauche, symétriquement.
function orbitAngle(i){
  const step = 360 / STATS.length;
  const half = Math.floor(i / 2) + 1;
  const sign = i % 2 === 0 ? 1 : -1;
  return sign * half * step;
}

function applyOrbitGeometry(statsOrbit, slots){
  const size = statsOrbit.clientWidth || 560;
  const radius = Math.min(260, Math.max(150, size * 0.34));
  slots.forEach((slot, i) => {
    const angleRad = (orbitAngle(i) * Math.PI) / 180;
    const x = Math.round(radius * Math.sin(angleRad));
    const y = Math.round(-radius * Math.cos(angleRad));
    slot.style.setProperty("--orbit-x", x + "px");
    slot.style.setProperty("--orbit-y", y + "px");
    slot.style.setProperty("--stack-z", String(i));
    const rot = (i % 2 === 0 ? 1 : -1) * (2 + (i % 6) * 0.7);
    slot.style.setProperty("--stack-rot", rot + "deg");
    slot.style.transitionDelay = (i * 65) + "ms";
  });
}

function renderStaticGrid(statsGrid){
  statsGrid.classList.remove("stats-orbit");
  statsGrid.classList.add("stats-static-grid");
  statsGrid.innerHTML = STATS.map(s => statCardHTML(s, true)).join("");
}

function renderOrbit(statsGrid){
  statsGrid.classList.remove("stats-static-grid");
  statsGrid.classList.add("stats-orbit");
  statsGrid.innerHTML = `
    <div class="orbit-ring">
      ${STATS.map(s => `
        <div class="orbit-slot">
          <div class="orbit-counter">${statCardHTML(s, false)}</div>
        </div>
      `).join("")}
    </div>
  `;

  const slots = Array.from(statsGrid.querySelectorAll(".orbit-slot"));
  applyOrbitGeometry(statsGrid, slots);

  // Élève la carte survolée au-dessus de ses voisines (le z-index d'un descendant
  // ne suffit pas seul : chaque slot a son propre contexte d'empilement).
  statsGrid.addEventListener("mouseover", (e) => {
    const card = e.target.closest(".stat-card");
    if(!card) return;
    card.closest(".orbit-slot")?.classList.add("slot-elevated");
  });
  statsGrid.addEventListener("mouseout", (e) => {
    const card = e.target.closest(".stat-card");
    if(!card) return;
    const slot = card.closest(".orbit-slot");
    if(slot && !slot.contains(e.relatedTarget)) slot.classList.remove("slot-elevated");
  });

  // Pile ↔ cercle tournant selon la visibilité de la section à l'écran.
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      statsGrid.classList.toggle("is-active", entry.isIntersecting);
    });
  }, { threshold: 0.35 });
  io.observe(statsGrid);

  window.addEventListener("resize", () => applyOrbitGeometry(statsGrid, slots), { passive: true });
}

function renderStats(){
  const statsGrid = document.getElementById("statsGrid");
  if(!statsGrid) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canOrbit = window.matchMedia("(min-width: 900px)").matches && !reduceMotion;

  if(canOrbit) renderOrbit(statsGrid);
  else renderStaticGrid(statsGrid);

  statsGrid.addEventListener("click", (e) => {
    const btn = e.target.closest(".stat-toggle");
    if(!btn) return;
    const card = btn.closest(".stat-card");
    const label = btn.querySelector(".stat-toggle-label");
    const expanded = card.classList.toggle("markets-expanded");
    label.textContent = expanded ? btn.dataset.less : btn.dataset.more;
  });
}

function animateCount(el){
  const raw = el.dataset.count;
  const match = raw.match(/-?[\d.]+/);
  if(!match){ el.textContent = raw; return; }
  const target = parseFloat(match[0]);
  const idx = raw.indexOf(match[0]);
  const prefix = raw.slice(0, idx);
  const suffix = raw.slice(idx + match[0].length);
  let cur = 0;
  const dur = 1200;
  const start = performance.now();
  function tick(now){
    const p = Math.min(1, (now - start) / dur);
    cur = target * (1 - Math.pow(1 - p, 3));
    el.textContent = prefix + (target % 1 === 0 ? Math.round(cur) : cur.toFixed(1)) + suffix;
    if(p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function initStatCounters(){
  const countEls = document.querySelectorAll(".stat-num");
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        animateCount(e.target);
        countIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  countEls.forEach(el => countIO.observe(el));
}

export function initStats(){
  renderStats();
  initStatCounters();
}
