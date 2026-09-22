// Animation d'apparition au scroll pour tout élément marqué [data-reveal].
// À appeler après le rendu de toutes les sections, une fois que tous les éléments existent dans le DOM.
export function initReveal(){
  const revealEls = document.querySelectorAll("[data-reveal]");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
}
