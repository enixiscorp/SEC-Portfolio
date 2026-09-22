// Bouton "scroll cue" du hero : fait défiler jusqu'à la section Profil.
export function initHero(){
  const scrollCue = document.getElementById("scrollCue");
  if(scrollCue){
    scrollCue.addEventListener("click", () => {
      document.getElementById("profil").scrollIntoView({ behavior: "smooth" });
    });
  }
}
