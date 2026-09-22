// Comportement de la barre de navigation : effet au scroll, barre de progression,
// lien actif selon la section visible, et menu déroulant (ouverture/fermeture).
export function initNav(){
  const nav = document.getElementById("nav");
  const progressBar = document.getElementById("scrollProgress");
  const navLinks = document.querySelectorAll("[data-nav]");
  const sections = document.querySelectorAll("main section[id]");

  function onScroll(){
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 20);

    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    progressBar.style.width = scrollable > 0 ? (y / scrollable * 100) + "%" : "0%";

    let current = "";
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if(rect.top <= 120 && rect.bottom > 120) current = sec.id;
    });
    navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const menuToggle = document.getElementById("menuToggle");
  const menuPanel = document.getElementById("menuPanel");
  const menuBackdrop = document.getElementById("menuBackdrop");
  const menuClose = document.getElementById("menuClose");

  function openMenu(){
    document.body.classList.add("menu-open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuPanel.setAttribute("aria-hidden", "false");
  }
  function closeMenu(){
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuPanel.setAttribute("aria-hidden", "true");
  }
  menuToggle.addEventListener("click", () => {
    document.body.classList.contains("menu-open") ? closeMenu() : openMenu();
  });
  menuClose.addEventListener("click", closeMenu);
  menuBackdrop.addEventListener("click", closeMenu);
  document.addEventListener("keydown", e => { if(e.key === "Escape") closeMenu(); });
  menuPanel.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));
}
