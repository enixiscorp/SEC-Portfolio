// Canvas de particules en arrière-plan (décoratif).
export function initParticles(){
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  let w, h, particlesArr;
  const COLORS = ["rgba(41,121,255,0.55)", "rgba(255,45,85,0.5)", "rgba(0,198,255,0.4)"];

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  function init(){
    resize();
    const count = Math.min(40, Math.floor(w / 32));
    particlesArr = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.6,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      c: COLORS[Math.floor(Math.random() * COLORS.length)]
    }));
  }
  function step(){
    ctx.clearRect(0, 0, w, h);
    particlesArr.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if(p.x < 0 || p.x > w) p.vx *= -1;
      if(p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c;
      ctx.fill();
    });
    requestAnimationFrame(step);
  }
  window.addEventListener("resize", resize);
  init();
  step();
}
