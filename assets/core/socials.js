// Rangée d'icônes sociales (utilisée dans le hero et dans la section contact).
import { ICONS } from "./icons.js";
import { CONTACT, waLink, mailLink } from "./config.js";

const SOCIALS = [
  { key: "whatsapp", url: null, label: "WhatsApp" },
  { key: "linkedin", url: CONTACT.linkedin, label: "LinkedIn" },
  { key: "github", url: CONTACT.github, label: "GitHub — Projets" },
  { key: "instagram", url: CONTACT.instagram, label: "Instagram" },
  { key: "facebook", url: CONTACT.facebook, label: "Facebook" },
  { key: "tiktok", url: CONTACT.tiktok, label: "TikTok" },
  { key: "youtube", url: CONTACT.youtube, label: "YouTube" },
  { key: "mail", url: null, label: "E-mail" },
];

function socialHref(item){
  if(item.key === "whatsapp") return waLink;
  if(item.key === "mail") return mailLink;
  return item.url;
}

function renderSocials(container){
  if(!container) return;
  container.innerHTML = SOCIALS.map(item => `
    <a href="${socialHref(item)}" target="_blank" rel="noopener" aria-label="${item.label}" title="${item.label}">
      ${ICONS[item.key]}
    </a>
  `).join("");
}

export function initSocials(){
  renderSocials(document.getElementById("socialRow"));
  renderSocials(document.getElementById("socialRowContact"));
}
