// Rendu de la grille de compétences.
import { SKILLS } from "./competences.data.js";

export function initCompetences(){
  const skillsGrid = document.getElementById("skillsGrid");
  if(!skillsGrid) return;
  skillsGrid.innerHTML = SKILLS.map(s => `
    <div class="skill-card" data-reveal>
      <h3><span class="dotmark"></span>${s.title}</h3>
      <div class="chip-row">${s.chips.map(c => `<span class="chip">${c}</span>`).join("")}</div>
    </div>
  `).join("");
}
