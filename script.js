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

  document.getElementById("cta").style.opacity = "1";

  setTimeout(() => {
    window.location.href = "main.html";
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

let currentLang = "it";

function toggleLanguage() {
  const elements = document.querySelectorAll('[data-it]');
  currentLang = (currentLang === "it") ? "en" : "it";

  elements.forEach(el => {
    if (el.tagName === "H3") {
      const icon = el.querySelector('img');
      const langText = (currentLang === "it") ? el.dataset.it : el.dataset.en;
      el.innerHTML = '';
      if (icon) el.appendChild(icon);
      el.append(" " + langText);
    } else {
      el.textContent = (currentLang === "it") ? el.dataset.it : el.dataset.en;
    }
  });

  // ✅ Cambio bandiera
  const langIcon = document.getElementById('langIcon');
  langIcon.src = (currentLang === "it") ? "assets/IT.svg" : "assets/ENG.svg";

  // ✅ Popup privacy - pulsante + testo
  const privacyText = document.getElementById("privacyText");
  const closeBtn = document.getElementById("closePrivacyPopup");
  if (privacyText && closeBtn) {
    privacyText.textContent = (currentLang === "it") ? privacyText.dataset.it : privacyText.dataset.en;
    closeBtn.textContent = (currentLang === "it") ? closeBtn.dataset.it : closeBtn.dataset.en;
  }

  // ✅ Pulsante privacy visibile
  const privacyBtn = document.getElementById("privacyBtn");
  if (privacyBtn) {
    privacyBtn.textContent = (currentLang === "it") ? privacyBtn.dataset.it : privacyBtn.dataset.en;
  }
}


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".service-block").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 80,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });
});

gsap.utils.toArray(".image-overlay").forEach((image) => {
  gsap.to(image, {
    yPercent: 15,
    ease: "none",
    scrollTrigger: {
      trigger: image,
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  });
});

ScrollTrigger.config({
  ignoreMobileResize: true
});

function startContattaciTransition(event) {
  event.preventDefault();
  const ripple = document.getElementById("rippleContattaci");
  ripple.style.width = "3000px";
  ripple.style.height = "3000px";
  ripple.style.opacity = "1";

  setTimeout(() => {
    window.location.href = "contatti.html";
  }, 1200);
}


