// ========== TOUR ITINERARY PAGE - COMPLETE JAVASCRIPT CODE ==========

// ========== MOBILE MENU TOGGLE ==========
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ========== STICKY NAVBAR ==========
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== BACK TO TOP BUTTON ==========
const backToTop = document.getElementById('back-to-top');

if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========== ACTIVE NAV LINK HIGHLIGHTING ==========
const currentLocation = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    link.classList.remove('active');
    
    if (currentLocation.endsWith(linkPath) || 
        (currentLocation.endsWith('/') && linkPath === 'index.html') ||
        (currentLocation.includes(linkPath.replace('.html', '')))) {
        link.classList.add('active');
    }
});

// ========== PAGE LOAD ANIMATION ==========
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-loaded');
});

// ========== DAY CARD SCROLL ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all day cards
document.addEventListener('DOMContentLoaded', () => {
    const dayCards = document.querySelectorAll('.day');
    dayCards.forEach(card => {
        observer.observe(card);
    });
});

// ========== HIGHLIGHT BOX ANIMATION ==========
const highlightBox = document.querySelector('.highlight');
if (highlightBox) {
    const highlightObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'scaleIn 0.6s ease forwards';
            }
        });
    }, { threshold: 0.3 });
    
    highlightObserver.observe(highlightBox);
}

// ========== ESTIMATE READING TIME ==========
function calculateReadingTime() {
    const container = document.querySelector('.container');
    const text = container.textContent;
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / wordsPerMinute);
    
    return readingTime;
}

// Display reading time
document.addEventListener('DOMContentLoaded', () => {
    const readingTime = calculateReadingTime();
    const container = document.querySelector('.container');
    const firstPara = container.querySelector('p');
    
    if (firstPara && readingTime > 0) {
        const timeInfo = document.createElement('p');
        timeInfo.style.cssText = 'text-align: center; color: #F4A300; font-weight: 600; font-size: 0.9rem; margin-top: 0.5rem;';
        timeInfo.innerHTML = `⏱️ Estimated reading time: ${readingTime} minute${readingTime > 1 ? 's' : ''}`;
        firstPara.parentNode.insertBefore(timeInfo, firstPara.nextSibling);
    }
});

// ========== PROGRESS BAR ==========
function createProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.id = 'reading-progress';
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
    const progressBar = document.getElementById('reading-progress');
    if (!progressBar) return;
    
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    
    progressBar.style.width = progress + '%';
}

document.addEventListener('DOMContentLoaded', () => {
    createProgressBar();
    window.addEventListener('scroll', updateProgressBar);
});

// ========== HIGHLIGHT IMPORTANT ACTIVITIES ==========
document.addEventListener('DOMContentLoaded', () => {
    const importantKeywords = ['Sigiriya', 'Safari', 'Temple', 'Ella', 'train'];
    const listItems = document.querySelectorAll('.day ul li');
    
    listItems.forEach(item => {
        const text = item.textContent;
        importantKeywords.forEach(keyword => {
            if (text.includes(keyword)) {
                item.style.fontWeight = '600';
                item.style.color = '#0E6251';
            }
        });
    });
});

// ========== BOOKING INQUIRY BUTTON ==========
function createBookingButton() {
    const bookingBtn = document.createElement('button');
    bookingBtn.innerHTML = '📞 Book Now';
    bookingBtn.style.cssText = `
        position: fixed;
        bottom: 90px;
        right: 30px;
        padding: 1rem 2rem;
        background: #F4A300;
        color: white;
        border: none;
        border-radius: 50px;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        box-shadow: 0 5px 20px rgba(244, 163, 0, 0.3);
        z-index: 998;
        transition: all 0.3s ease;
        font-family: 'Poppins', sans-serif;
    `;
    
    bookingBtn.addEventListener('click', () => {
        window.location.href = 'contact.html';
    });
    
    bookingBtn.addEventListener('mouseenter', () => {
        bookingBtn.style.transform = 'translateY(-5px)';
        bookingBtn.style.boxShadow = '0 10px 30px rgba(244, 163, 0, 0.4)';
    });
    
    bookingBtn.addEventListener('mouseleave', () => {
        bookingBtn.style.transform = 'translateY(0)';
        bookingBtn.style.boxShadow = '0 5px 20px rgba(244, 163, 0, 0.3)';
    });
    
    document.body.appendChild(bookingBtn);
}

document.addEventListener('DOMContentLoaded', () => {
    createBookingButton();
});

// ========== PAGE TRANSITION ANIMATION ==========
document.querySelectorAll('a[href*=".html"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#')) {
            e.preventDefault();
            document.body.classList.add('page-transitioning');
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        }
    });
});

// ========== TOOLTIP FOR ACTIVITIES ==========
const activityDescriptions = {
    'Sigiriya Rock Fortress': 'Ancient rock fortress and UNESCO World Heritage Site',
    'Temple of the Tooth Relic': 'Sacred Buddhist temple housing tooth relic of Buddha',
    'Maduru Oya National Park': 'Wildlife sanctuary famous for elephants',
    'Nine Arches Bridge': 'Iconic railway bridge in Ella',
    'Elephant Orphanage': 'Care facility for orphaned elephants'
};

document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.day ul li');
    
    listItems.forEach(item => {
        const text = item.textContent;
        Object.keys(activityDescriptions).forEach(activity => {
            if (text.includes(activity)) {
                item.title = activityDescriptions[activity];
                item.style.cursor = 'help';
            }
        });
    });
});

console.log('✅ Tour Itinerary Page Loaded Successfully!');