// Rendu de la grille de certifications.
import { ICONS } from "../../core/icons.js";
import { CERTS } from "./certifications.data.js";

export function initCertifications(){
  const certGrid = document.getElementById("certGrid");
  if(!certGrid) return;
  certGrid.innerHTML = CERTS.map(c => `
    <a class="cert-card" href="${c.link}" target="_blank" rel="noopener" data-reveal>
      <div class="cert-badge">${ICONS.cert}</div>
      <div class="cert-title">${c.title}</div>
      <div class="cert-meta"><span>${c.issuer}</span><span>${c.date}</span></div>
      <span class="cert-link">Voir le certificat ${ICONS.external}</span>
    </a>
  `).join("");
}
