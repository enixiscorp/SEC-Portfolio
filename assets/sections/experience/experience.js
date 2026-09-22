// Rendu de la timeline d'expérience professionnelle + bascule "voir plus / voir moins".
import { TIMELINE } from "./experience.data.js";

const TL_PREVIEW_COUNT = 3;

function renderBullet(b){
  return b && b.markets
    ? `<li class="tl-markets">${b.markets.join(", ")}</li>`
    : `<li>${b}</li>`;
}

export function initExperience(){
  const timelineEl = document.getElementById("timeline");
  if(!timelineEl) return;

  timelineEl.innerHTML = TIMELINE.map((t, i) => {
    const visible = t.bullets.slice(0, TL_PREVIEW_COUNT);
    const hidden = t.bullets.slice(TL_PREVIEW_COUNT);
    return `
    <div class="tl-item ${i % 2 ? 'orange' : ''}" data-reveal>
      <span class="tl-dot"></span>
      <div class="tl-card">
        <div class="tl-top">
          <span class="tl-badge">${t.badge}</span>
          <span class="tl-period">${t.period}</span>
        </div>
        <span class="tl-role">${t.role}</span>
        <div class="tl-org">${t.org}</div>
        <p class="tl-intro">${t.intro}</p>
        <p class="tl-subhead">Réalisations clés</p>
        <ul class="tl-list">${visible.map(renderBullet).join("")}</ul>
        ${hidden.length ? `
          <ul class="tl-list tl-list-more">${hidden.map(renderBullet).join("")}</ul>
          <button class="tl-toggle" type="button" data-more="Voir plus (${hidden.length} autre${hidden.length > 1 ? 's' : ''})" data-less="Voir moins">
            <span class="tl-toggle-label">Voir plus (${hidden.length} autre${hidden.length > 1 ? 's' : ''})</span>
            <svg class="ic-chev" viewBox="0 0 24 24"><path fill="currentColor" d="M7 10l5 5 5-5z"/></svg>
          </button>
        ` : ``}
        ${t.skills && t.skills.length ? `
          <p class="tl-subhead">Compétences mobilisées</p>
          <div class="tl-skills">${t.skills.map(s => `<span class="chip">${s}</span>`).join("")}</div>
        ` : ``}
      </div>
    </div>
  `;
  }).join("");

  timelineEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".tl-toggle");
    if(!btn) return;
    const card = btn.closest(".tl-card");
    const label = btn.querySelector(".tl-toggle-label");
    const expanded = card.classList.toggle("expanded");
    label.textContent = expanded ? btn.dataset.less : btn.dataset.more;
  });
}
