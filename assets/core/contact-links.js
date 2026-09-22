// Câble les liens WhatsApp / e-mail / LinkedIn statiques du header, du hero et du menu.
import { CONTACT, waLink, mailLink } from "./config.js";

export function initContactLinks(){
  ["waHero", "waContact"].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.href = waLink;
  });

  const mailContact = document.getElementById("mailContact");
  if(mailContact) mailContact.href = mailLink;

  const menuMail = document.getElementById("menuMail");
  if(menuMail) menuMail.href = mailLink;

  const menuLinkedin = document.getElementById("menuLinkedin");
  if(menuLinkedin) menuLinkedin.href = CONTACT.linkedin;
}
