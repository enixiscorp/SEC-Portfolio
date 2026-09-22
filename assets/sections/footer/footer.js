// Année courante dans le copyright + bouton "retour en haut".
export function initFooter(){
  const year = document.getElementById("year");
  if(year) year.textContent = new Date().getFullYear();

  const backTop = document.getElementById("backTop");
  if(backTop){
    backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
}
