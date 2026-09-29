// Rendu du bandeau défilant (marquee) des évènements + fiche détaillée avec vue plein écran.
import { EVENTS } from "./events.data.js";

const ICON_EXPAND = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>`;
const ICON_CLOSE = `<svg viewBox="0 0 24 24"><path fill="currentColor" d="m6.4 5 12.6 12.6-1.4 1.4L5 6.4 6.4 5Zm12.6 1.4L6.4 19 5 17.6 17.6 5 19 6.4Z"/></svg>`;
const ICON_PREV = `<svg viewBox="0 0 24 24" class="ic"><path fill="currentColor" d="M15.4 6 9.4 12l6 6-1.4 1.4L6.6 12l7.4-7.4L15.4 6Z"/></svg>`;
const ICON_NEXT = `<svg viewBox="0 0 24 24" class="ic"><path fill="currentColor" d="M8.6 6 14.6 12l-6 6 1.4 1.4L17.4 12 10 4.6 8.6 6Z"/></svg>`;

let modalRoot = null;
let fullRoot = null;
let currentIndex = 0;

function q(root, sel){ return root.querySelector(sel); }

function buildModal(){
  modalRoot = document.createElement("div");
  modalRoot.className = "event-modal";
  modalRoot.setAttribute("aria-hidden", "true");
  modalRoot.innerHTML = `
    <div class="event-modal-backdrop" data-event-close></div>
    <div class="event-modal-box" role="dialog" aria-modal="true" aria-labelledby="eventModalTitle">
      <button class="event-modal-close" type="button" data-event-close aria-label="Fermer la fiche">${ICON_CLOSE}</button>
      <div class="event-modal-viewer">
        <button class="event-nav" type="button" id="eventPrev" aria-label="Événement précédent">${ICON_PREV}</button>
        <div class="event-modal-img-wrap" id="eventModalImgWrap">
          <img id="eventModalImg" alt="" decoding="async">
          <button class="event-expand" type="button" data-event-expand aria-label="Agrandir en plein écran">${ICON_EXPAND}<span>Plein écran</span></button>
        </div>
        <button class="event-nav" type="button" id="eventNext" aria-label="Événement suivant">${ICON_NEXT}</button>
      </div>
      <div class="event-modal-body">
        <span class="event-modal-badge" id="eventModalRole"></span>
        <h3 id="eventModalTitle"></h3>
        <p class="event-modal-date" id="eventModalDate"></p>
        <p class="event-modal-desc" id="eventModalDesc"></p>
      </div>
    </div>`;
  document.body.appendChild(modalRoot);

  modalRoot.addEventListener("click", (e) => {
    if(e.target.closest("[data-event-close]")) closeModal();
    else if(e.target.closest("[data-event-expand]") || e.target.closest("#eventModalImg")) openFull();
    else if(e.target.closest("#eventPrev")) go(currentIndex - 1);
    else if(e.target.closest("#eventNext")) go(currentIndex + 1);
  });
}

function buildFull(){
  fullRoot = document.createElement("div");
  fullRoot.className = "event-full";
  fullRoot.setAttribute("aria-hidden", "true");
  fullRoot.innerHTML = `
    <div class="event-full-stage"><img id="eventFullImg" alt="" decoding="async"></div>
    <button class="event-full-close" type="button" data-event-full-close aria-label="Fermer">${ICON_CLOSE}</button>
    <button class="event-full-nav event-full-prev" type="button" id="eventFullPrev" aria-label="Précédent">${ICON_PREV}</button>
    <button class="event-full-nav event-full-next" type="button" id="eventFullNext" aria-label="Suivant">${ICON_NEXT}</button>
    <div class="event-full-counter" id="eventFullCounter"></div>`;
  document.body.appendChild(fullRoot);

  fullRoot.addEventListener("click", (e) => {
    if(e.target.closest("[data-event-full-close]")) closeFull();
    else if(e.target.closest("#eventFullPrev")) go(currentIndex - 1);
    else if(e.target.closest("#eventFullNext")) go(currentIndex + 1);
    else if(e.target.id !== "eventFullImg") closeFull();
  });
}

function isFullOpen(){
  return !!fullRoot && fullRoot.getAttribute("aria-hidden") === "false";
}

function renderModal(){
  const ev = EVENTS[currentIndex];
  q(modalRoot, "#eventModalImg").src = ev.image;
  q(modalRoot, "#eventModalImg").alt = ev.title;
  q(modalRoot, "#eventModalRole").textContent = ev.role;
  q(modalRoot, "#eventModalTitle").textContent = ev.title;
  q(modalRoot, "#eventModalDate").textContent = ev.date;
  q(modalRoot, "#eventModalDesc").textContent = ev.description;
  q(modalRoot, "#eventPrev").disabled = currentIndex === 0;
  q(modalRoot, "#eventNext").disabled = currentIndex === EVENTS.length - 1;
  if(isFullOpen()) renderFull();
}

function renderFull(){
  const ev = EVENTS[currentIndex];
  q(fullRoot, "#eventFullImg").src = ev.image;
  q(fullRoot, "#eventFullImg").alt = ev.title;
  q(fullRoot, "#eventFullCounter").textContent = `${ev.title} — ${currentIndex + 1} / ${EVENTS.length}`;
  q(fullRoot, "#eventFullPrev").disabled = currentIndex === 0;
  q(fullRoot, "#eventFullNext").disabled = currentIndex === EVENTS.length - 1;
}

function go(i){
  if(i < 0 || i > EVENTS.length - 1) return;
  currentIndex = i;
  renderModal();
}

function openFull(){
  if(!fullRoot) buildFull();
  renderFull();
  fullRoot.setAttribute("aria-hidden", "false");
}
function closeFull(){
  if(fullRoot) fullRoot.setAttribute("aria-hidden", "true");
}

function openModal(idx){
  if(!modalRoot) buildModal();
  currentIndex = idx;
  renderModal();
  modalRoot.setAttribute("aria-hidden", "false");
  document.body.classList.add("event-modal-open");
}
function closeModal(){
  closeFull();
  modalRoot.setAttribute("aria-hidden", "true");
  document.body.classList.remove("event-modal-open");
}

function initEventModal(eventsMarquee){
  eventsMarquee.addEventListener("click", (e) => {
    const card = e.target.closest("[data-event-index]");
    if(!card) return;
    openModal(Number(card.dataset.eventIndex));
  });
  document.addEventListener("keydown", (e) => {
    if(!modalRoot || modalRoot.getAttribute("aria-hidden") === "true") return;
    if(e.key === "Escape"){ isFullOpen() ? closeFull() : closeModal(); }
    else if(e.key === "ArrowLeft") go(currentIndex - 1);
    else if(e.key === "ArrowRight") go(currentIndex + 1);
  });
}

export function initEvents(){
  const eventsMarquee = document.getElementById("eventsMarquee");
  if(!eventsMarquee) return;

  const renderEvent = (e, idx) => `
    <div class="event-card" data-event-index="${idx}">
      <div class="event-img-wrap">
        <img src="${e.image}" alt="${e.title}" loading="lazy">
        <span class="event-img-hint">${ICON_EXPAND}<span>Voir la fiche</span></span>
      </div>
      <div class="event-content">
        <h3>${e.title}</h3>
        <p class="event-meta"><strong>${e.role}</strong> &middot; ${e.date}</p>
        <p class="event-desc">${e.description}</p>
      </div>
    </div>
  `;

  // Pour un effet marquee infini, on duplique le contenu.
  const eventsHtml = EVENTS.map(renderEvent).join("");
  // On insère deux groupes d'évènements pour assurer la continuité lors du défilement.
  eventsMarquee.innerHTML = `<div class="marquee-group">${eventsHtml}</div><div class="marquee-group" aria-hidden="true">${eventsHtml}</div>`;

  initEventModal(eventsMarquee);
}
