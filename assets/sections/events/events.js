// Rendu du bandeau défilant (marquee) des évènements.
import { EVENTS } from "./events.data.js";

export function initEvents(){
  const eventsMarquee = document.getElementById("eventsMarquee");
  if(!eventsMarquee) return;

  const renderEvent = (e) => `
    <div class="event-card">
      <div class="event-img-wrap">
        <img src="${e.image}" alt="${e.title}" loading="lazy">
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
}
