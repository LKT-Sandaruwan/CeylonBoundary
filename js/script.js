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

// ========== STICKY NAVBAR ==========
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
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

// ========== DESTINATIONS FILTER ==========
const filterBtns = document.querySelectorAll(".filter-btn[data-filter]");
const destinationCards = document.querySelectorAll(
  ".destination-card[data-category]"
);

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    // Update active button
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Filter cards
    destinationCards.forEach((card) => {
      if (filter === "all") {
        card.style.display = "block";
      } else {
        const categories = card.getAttribute("data-category");
        if (categories && categories.includes(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      }
    });
  });
});

// ========== GALLERY FILTER ==========
const galleryFilterBtns = document.querySelectorAll(
  ".filter-btn[data-gallery-filter]"
);
const galleryItems = document.querySelectorAll(
  ".gallery-item[data-gallery-category]"
);

galleryFilterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-gallery-filter");

    // Update active button
    galleryFilterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Filter gallery items
    galleryItems.forEach((item) => {
      if (filter === "all") {
        item.style.display = "block";
      } else {
        const category = item.getAttribute("data-gallery-category");
        if (category === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });
  });
});

// ========== LIGHTBOX ==========
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

if (lightbox && lightboxImg && lightboxClose) {
  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const imgSrc = item.querySelector("img").src;
      lightboxImg.src = imgSrc;
      lightbox.classList.add("active");
    });
  });

  lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });

  // Close lightbox on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      lightbox.classList.remove("active");
    }
  });
}

// ========== TESTIMONIALS CAROUSEL ==========
const testimonials = document.querySelectorAll(".testimonial");
const prevBtn = document.getElementById("prev-testimonial");
const nextBtn = document.getElementById("next-testimonial");
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((t) => t.classList.remove("active"));
  if (testimonials[index]) {
    testimonials[index].classList.add("active");
  }
}

if (prevBtn && nextBtn && testimonials.length > 0) {
  nextBtn.addEventListener("click", () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  });

  prevBtn.addEventListener("click", () => {
    currentTestimonial =
      (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
  });

  // Auto-rotate testimonials every 5 seconds
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 5000);
}

// ========== CONTACT FORM ==========
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    contactForm.reset();
  });
}

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

// ========== SCROLL ANIMATIONS FOR EXPERIENCE PAGE ==========
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, observerOptions);

// Observe experience sections
document.addEventListener("DOMContentLoaded", () => {
  const experienceSections = document.querySelectorAll(".experience-section");
  experienceSections.forEach((section) => {
    observer.observe(section);
  });
});

// ========== ACTIVE NAV LINK HIGHLIGHTING ==========
const currentLocation = window.location.pathname;
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  // Get the href and extract just the filename
  const linkPath = link.getAttribute("href");

  // Remove active from all links first
  link.classList.remove("active");

  // Check if current page matches the link
  if (
    currentLocation.endsWith(linkPath) ||
    (currentLocation.endsWith("/") && linkPath === "index.html") ||
    currentLocation.includes(linkPath.replace(".html", ""))
  ) {
    link.classList.add("active");
  }
});

// ========== HEADER TEXT ANIMATION ON LOAD ==========
window.addEventListener("load", () => {
  const headerTitle = document.querySelector(".page-header h1");
  if (headerTitle) {
    headerTitle.classList.add("animate");
  }
});

// ========== PROGRESS BAR ==========
function createProgressBar() {
  const progressBar = document.createElement("div");
  progressBar.id = "reading-progress";
  progressBar.style.cssText = `
        position: fixed;
        top: 70px;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(to right, #0E6251, #F4A300);
        z-index: 999;
        transition: width 0.1s ease;
    `;
  document.body.appendChild(progressBar);
}

function updateProgressBar() {
  const progressBar = document.getElementById("reading-progress");
  if (!progressBar) return;

  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight - windowHeight;
  const scrolled = window.scrollY;
  const progress = (scrolled / documentHeight) * 100;

  progressBar.style.width = progress + "%";
}

document.addEventListener("DOMContentLoaded", () => {
  createProgressBar();
  window.addEventListener("scroll", updateProgressBar);
});
