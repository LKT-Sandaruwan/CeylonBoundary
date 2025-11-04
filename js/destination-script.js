// ========== MOBILE MENU TOGGLE ==========
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// ========== HERO IMAGE SLIDER ==========
let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

function showSlide(index) {
  // Remove active class from all slides and dots
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // Add active class to current slide and dot
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Button click events
if (nextBtn) {
  nextBtn.addEventListener("click", nextSlide);
}

if (prevBtn) {
  prevBtn.addEventListener("click", prevSlide);
}

// Dot click events
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ========== BACK TO TOP BUTTON ==========
const backToTop = document.getElementById("back-to-top");

if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ========== SCROLL ANIMATIONS ==========
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.6s ease forwards";
    }
  });
}, observerOptions);

// Observe all info sections
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".info-section");
  sections.forEach((section) => {
    observer.observe(section);
  });
});

// ========== PAGE LOAD ANIMATION ==========
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-loaded");
});

// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
  } else {
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  }
});

// ========== KEYBOARD NAVIGATION FOR SLIDER ==========
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prevSlide();
  } else if (e.key === "ArrowRight") {
    nextSlide();
  }
});

// ========== ACTIVE NAV LINK ==========
const currentLocation = window.location.pathname;
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  const linkPath = link.getAttribute("href");
  link.classList.remove("active");

  if (
    currentLocation.includes("destination") ||
    currentLocation.includes("mirissa") ||
    currentLocation.includes("sigiriya") ||
    currentLocation.includes("ella")
  ) {
    if (link.textContent === "Destinations") {
      link.classList.add("active");
    }
  }
});

console.log("✅ Destination Page Loaded Successfully!");
