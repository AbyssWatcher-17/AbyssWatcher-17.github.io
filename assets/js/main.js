/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 390) {
      current = section.getAttribute('id');
    }
  })

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.classList.contains(current)) {
      link.classList.add('active');
    }
  })
})

// function linkAction() {
//   /*Active link*/
//   navLinks.forEach((n) => n.classList.remove("active"));
//   this.classList.add("active");

//   /*Remove menu mobile*/
const navMenu = document.getElementById("nav-menu");
//   navMenu.classList.remove("show");
// }
navLinks.forEach((n) => n.addEventListener("click", () => { navMenu.classList.remove("show") }));

/*===== COPY Email =====*/
const copyBtn = document.getElementById("copy");
if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    const email = "yavuzgokmene@hotmail.com";
    const copyText = document.getElementById("copy-text");
    const copyIcon = document.getElementById("copy-icon");

    const onSuccess = () => {
      if (copyText) copyText.innerText = "Copied!";
      if (copyIcon) {
        copyIcon.className = "bx bx-check";
      }
      copyBtn.classList.add("copied");

      setTimeout(() => {
        if (copyText) copyText.innerText = "Copy";
        if (copyIcon) {
          copyIcon.className = "bx bx-copy";
        }
        copyBtn.classList.remove("copied");
      }, 2000);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(onSuccess).catch(() => {
        fallbackCopyText(email, onSuccess);
      });
    } else {
      fallbackCopyText(email, onSuccess);
    }
  });
}

function fallbackCopyText(text, callback) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    if (callback) callback();
  } catch (err) {
    console.error("Fallback copy failed", err);
  }
  document.body.removeChild(textArea);
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});



/*===== education-card =====*/
const educationCards = document.querySelectorAll('.education-card');

educationCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('show');
  });
});

/*SCROLL HOME*/
sr.reveal(".home-title", {});
//sr.reveal(".button", { delay: 200 });
sr.reveal(".home-img", { delay: 400 });
sr.reveal(".home-social-icon", { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal(".about-img", {});
sr.reveal(".about-imgleft", {});
sr.reveal(".about-imgright", {});

sr.reveal(".about-subtitle", { delay: 400 });
sr.reveal(".about-text", { delay: 400 });

// /*SCROLL SKILLS*/
// sr.reveal(".skills-subtitle", {});
// sr.reveal(".skills-text", {});
// sr.reveal(".skills-data", { interval: 100 });
// sr.reveal(".skills-img", { delay: 600 });

/*SCROLL projects*/
// sr.reveal(".project-img", { interval: 200 });

/*SCROLL CONTACT*/
// sr.reveal(".contact-input", { interval: 200 });

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode")
}


var messageArr = ["Software Developer"];
var textPosition = 0;
var speed = 200;

typewriter = () => {
  // for(let i = 0; i < messageArr.length; i++) {
  document.querySelector("#jobTitle").innerHTML = messageArr[0].substring(0, textPosition);
  if (textPosition++ != messageArr[0].length)
    setTimeout(typewriter, speed)
}


window.addEventListener("load", typewriter);

