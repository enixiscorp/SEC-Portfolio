// Point d'entrée unique du site. Ce fichier ne fait qu'assembler les modules indépendants
// de assets/core/ et assets/sections/<nom>/ — il ne contient aucune donnée ni logique propre.
// Ajouter/retirer une section = ajouter/retirer une ligne ici, sans toucher aux autres modules.
import { initContactLinks } from "./core/contact-links.js";
import { initSocials } from "./core/socials.js";
import { initReveal } from "./core/reveal.js";
import { initNav } from "./core/nav.js";
import { initParticles } from "./core/particles.js";

import { initHero } from "./sections/hero/hero.js";
import { initStats } from "./sections/stats/stats.js";
import { initCompetences } from "./sections/competences/competences.js";
import { initExperience } from "./sections/experience/experience.js";
import { initEvents } from "./sections/events/events.js";
import { initProjects } from "./sections/projects/projects.js";
import { initCertifications } from "./sections/certifications/certifications.js";
import { initFooter } from "./sections/footer/footer.js";

initContactLinks();
initSocials();

initStats();
initCompetences();
initExperience();
initEvents();
initCertifications();
initProjects();

// La révélation au scroll doit s'initialiser après le rendu de toutes les sections ci-dessus,
// pour observer tous les éléments [data-reveal] qu'elles viennent de créer.
initReveal();

initNav();
initHero();
initFooter();
initParticles();
