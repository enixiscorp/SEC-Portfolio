// Grille de projets (formations, sites, documents), filtres, et visionneuse de documents confidentiels.
import { ICONS } from "../../core/icons.js";
import { CONTACT } from "../../core/config.js";
import { PROJECTS } from "./projects.data.js";

const PROJECT_TYPE_LABEL = { formation: "Formation", site: "Site Web", document: "Document" };
const PROJECT_TYPE_ICON = { formation: ICONS.cert, site: ICONS.globe, document: ICONS.document };

function projectMedia(p){
  const img = p.type === "document" ? p.cover : p.image;
  if(img) return `<img src="${img}" alt="${p.title}" loading="lazy" onerror="this.outerHTML='<span class=&quot;project-placeholder-ic&quot;>${PROJECT_TYPE_ICON[p.type].replace(/"/g, "'")}</span>'">`;
  return `<span class="project-placeholder-ic">${PROJECT_TYPE_ICON[p.type]}</span>`;
}

function projectCTA(p, idx){
  if(p.type === "site"){
    return `<a class="project-cta" href="${p.link}" target="_blank" rel="noopener">Visiter le site ${ICONS.external}</a>`;
  }
  if(p.type === "document"){
    return `<button class="project-cta" type="button" data-doc-open="${idx}">Consulter l'aperçu ${ICONS.external}</button>`;
  }
  if(p.link){
    return `<a class="project-cta" href="${p.link}" target="_blank" rel="noopener">En savoir plus ${ICONS.external}</a>`;
  }
  return ``;
}

let projectsGrid;

function renderProjects(filter){
  if(!projectsGrid) return;
  const list = PROJECTS
    .map((p, idx) => ({ p, idx }))
    .filter(({ p }) => {
      if(filter === "all") return true;
      if(filter === "ressource") return p.type === "formation" || p.type === "document";
      return p.type === filter;
    });
  projectsGrid.innerHTML = list.map(({ p, idx }) => `
    <div class="project-card" data-reveal>
      <div class="project-media">${projectMedia(p)}</div>
      <div class="project-body">
        <span class="project-badge project-badge-${p.type}">${p.kind || PROJECT_TYPE_LABEL[p.type]}</span>
        <h3>${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        ${p.category ? `<p class="project-meta">${p.category}</p>` : ``}
        ${projectCTA(p, idx)}
      </div>
    </div>
  `).join("") || `<p class="muted">Aucun projet dans cette catégorie pour le moment.</p>`;
}

function initFilters(){
  const projectFiltersEl = document.getElementById("projectFilters");
  if(!projectFiltersEl) return;
  projectFiltersEl.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if(!btn) return;
    projectFiltersEl.querySelectorAll("[data-filter]").forEach(b => b.classList.toggle("active", b === btn));
    renderProjects(btn.dataset.filter);
    projectsGrid.querySelectorAll(".project-card").forEach(c => c.classList.add("in"));
  });
}

// ---- visionneuse de documents (lightbox) ----
const MAX_PREVIEW_PAGES = 5;
let currentDocProject = null;
let currentDocIndex = 0;

function docWaLink(p){
  const msg = `Bonjour Edem, j'ai consulté l'aperçu du document "${p.title}" sur votre portfolio et je souhaiterais en voir l'intégralité.`;
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

function buildDocSlides(p){
  const imgs = [p.cover, ...(p.pages || [])].filter(Boolean).slice(0, MAX_PREVIEW_PAGES);
  const slides = imgs.map(src => ({ type: "image", src }));
  if(!slides.length) slides.push({ type: "placeholder" });
  slides.push({ type: "locked" });
  return slides;
}

function renderDocSlide(){
  const slides = buildDocSlides(currentDocProject);
  const slide = slides[currentDocIndex];
  const slidesEl = document.getElementById("docSlides");
  if(slide.type === "image"){
    slidesEl.innerHTML = `<img src="${slide.src}" alt="${currentDocProject.title} — page ${currentDocIndex + 1}" decoding="async" onerror="this.closest('.doc-slides').innerHTML='<div class=&quot;doc-slide-empty&quot;>${ICONS.document.replace(/"/g, "'")}<p>Image introuvable : ${slide.src}</p></div>'">`;
  } else if(slide.type === "placeholder"){
    slidesEl.innerHTML = `<div class="doc-slide-empty">${ICONS.document}<p>Aperçu à venir</p></div>`;
  } else {
    slidesEl.innerHTML = `
      <div class="doc-slide-locked">
        ${ICONS.lock}
        <p>Le reste de ce document est confidentiel.</p>
        <a class="btn btn-primary" href="${docWaLink(currentDocProject)}" target="_blank" rel="noopener">Contacter pour consulter</a>
      </div>`;
  }
  document.getElementById("docThumbs").innerHTML = slides.map((sl, i) => {
    const inner = sl.type === "image"
      ? `<img src="${sl.src}" alt="Page ${i + 1}" decoding="async">`
      : (sl.type === "locked" ? ICONS.lock : ICONS.document);
    return `<button type="button" class="doc-thumb ${sl.type === "locked" ? "doc-thumb-lock" : ""} ${i === currentDocIndex ? "active" : ""}" data-dot="${i}" aria-label="${sl.type === "locked" ? "Pages suivantes (confidentielles)" : "Page " + (i + 1)}">${inner}</button>`;
  }).join("");
  document.getElementById("docDots").innerHTML = slides.map((_, i) =>
    `<span class="doc-dot ${i === currentDocIndex ? "active" : ""}" data-dot="${i}"></span>`
  ).join("");
  document.getElementById("docPrev").disabled = currentDocIndex === 0;
  document.getElementById("docNext").disabled = currentDocIndex === slides.length - 1;
}

function openDocModal(idx){
  currentDocProject = PROJECTS[idx];
  currentDocIndex = 0;
  document.getElementById("docModalTitle").textContent = currentDocProject.title;
  document.getElementById("docModalBadge").textContent = currentDocProject.category || "Document";
  buildDocSlides(currentDocProject).forEach(sl => { if(sl.type === "image") new Image().src = sl.src; });
  renderDocSlide();
  document.getElementById("docModal").setAttribute("aria-hidden", "false");
  document.body.classList.add("doc-modal-open");
}
function closeDocModal(){
  document.getElementById("docModal").setAttribute("aria-hidden", "true");
  document.body.classList.remove("doc-modal-open");
}

function initDocModal(){
  if(projectsGrid){
    projectsGrid.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-doc-open]");
      if(!btn) return;
      openDocModal(Number(btn.dataset.docOpen));
    });
  }
  const docModal = document.getElementById("docModal");
  if(!docModal) return;
  document.getElementById("docModalClose").addEventListener("click", closeDocModal);
  document.getElementById("docModalBackdrop").addEventListener("click", closeDocModal);
  document.addEventListener("keydown", e => { if(e.key === "Escape") closeDocModal(); });
  document.getElementById("docPrev").addEventListener("click", () => {
    if(currentDocIndex > 0){ currentDocIndex--; renderDocSlide(); }
  });
  document.getElementById("docNext").addEventListener("click", () => {
    const slides = buildDocSlides(currentDocProject);
    if(currentDocIndex < slides.length - 1){ currentDocIndex++; renderDocSlide(); }
  });
  ["docDots", "docThumbs"].forEach(id => {
    document.getElementById(id).addEventListener("click", (e) => {
      const dot = e.target.closest("[data-dot]");
      if(!dot) return;
      currentDocIndex = Number(dot.dataset.dot);
      renderDocSlide();
    });
  });
}

export function initProjects(){
  projectsGrid = document.getElementById("projectsGrid");
  renderProjects("all");
  initFilters();
  initDocModal();
}
