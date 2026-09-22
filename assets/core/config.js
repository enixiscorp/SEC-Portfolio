// CONFIG : coordonnées de contact et liens construits à partir d'elles.
// Modifier ce fichier suffit pour changer le numéro WhatsApp, l'e-mail ou les réseaux partout sur le site.
export const CONTACT = {
  whatsappNumber: "22893369070", // +228 93 36 90 70
  email: "edemcyrille@gmail.com",
  linkedin: "https://linkedin.com/in/edem-cyrille-sos",
  instagram: "https://www.instagram.com/mister_process_optimizer/",
  facebook: "https://www.facebook.com/profile.php?id=100007996022605",
  tiktok: "https://www.tiktok.com/@mister_process_optimize",
  youtube: "https://www.youtube.com/@Edemcyrille",
  github: "https://github.com/enixiscorp"
};

export const WA_MESSAGE = "Bonjour Edem, j'ai consulté votre portfolio et je souhaite discuter d'une opportunité de collaboration.";
export const MAIL_SUBJECT = "Opportunité de collaboration";
export const MAIL_BODY = "Bonjour Edem,\n\nJ'ai consulté votre portfolio et je souhaite discuter d'une opportunité de collaboration.\n\n";

export const waLink = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(WA_MESSAGE)}`;
export const mailLink = `mailto:${CONTACT.email}?subject=${encodeURIComponent(MAIL_SUBJECT)}&body=${encodeURIComponent(MAIL_BODY)}`;
