Promise.all([
  fetch("assets/EntSVG.svg").then(res => res.text()),
  fetch("assets/Triangolo.svg").then(res => res.text())
]).then(([logoSVG, triangleSVG]) => {
  document.getElementById("logoWrapper").innerHTML = logoSVG;
  document.getElementById("triangleWrapper").innerHTML = triangleSVG;
});

// Entra! dopo l'animazione (5.1s)
setTimeout(() => {
  document.getElementById("cta").style.opacity = "1";
}, 5100);

function startTransition() {
  const ripple = document.getElementById("ripple");
  ripple.style.width = "3000px";
  ripple.style.height = "3000px";
  ripple.style.opacity = "1";
  
  // opzionale: sfuma anche il bottone
  document.getElementById("cta").style.opacity = "1";

  // aspetta 1.2s e poi cambia pagina (o scrolla)
  setTimeout(() => {
    window.location.href = "main.html"; // cambia con la tua pagina
  }, 1200);
}

let menuVisible = false;

function toggleLogo() {
 const logoMin = document.getElementById("logoToggle");
const logoFull = document.getElementById("logoFull");
const nav = document.getElementById("mainNav");

if (!menuVisible) {
  logoMin.classList.add("fade");
  logoFull.classList.add("show");
  nav.classList.add("show");
} else {
  logoMin.classList.remove("fade");
  logoFull.classList.remove("show");
  nav.classList.remove("show");
}
menuVisible = !menuVisible;

}

let currentLang = "IT";

function toggleLanguage() {
  const elements = document.querySelectorAll("[data-it][data-en]");
  const langIcon = document.getElementById("langIcon");

  // Cambia testi in base alla lingua attuale
  elements.forEach(el => {
    el.textContent = currentLang === "IT"
      ? el.getAttribute("data-en")
      : el.getAttribute("data-it");
  });

  // Cambia bandiera
  if (currentLang === "IT") {
    langIcon.src = "assets/ENG.svg";
    langIcon.alt = "EN";
    currentLang = "EN";
  } else {
    langIcon.src = "assets/IT.svg";
    langIcon.alt = "IT";
    currentLang = "IT";
  }
}
















