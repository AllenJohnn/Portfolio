
// Scroll Progress Bar

window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = progress + '%';

    const scrollTopBtn = document.querySelector('.scroll-top');
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

// Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Stats  Animation
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                if (counter.textContent === '0') animateCounter(counter);
            });
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) statsObserver.observe(statsSection);

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});


// Intersection Fade Reveal
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, observerOptions);

document.querySelectorAll('.about-grid, .project-card, .contact-section .container, .timeline-item')
    .forEach(el => fadeObserver.observe(el));

// Project card stagger
document.querySelectorAll('.project-card')
    .forEach((card, index) => card.style.transitionDelay = `${index * 0.1}s`);

// Nav Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            document.getElementById('menu-toggle').checked = false;
        }
    });
});

// WhatsApp 
function sendWhatsApp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        const text = `Hello! My name is ${name}. Email: ${email}. Message: ${message}`;
        const whatsappURL = `https://wa.me/916282091469?text=${encodeURIComponent(text)}`;
        window.open(whatsappURL, '_blank');
    } else {
        alert('Please fill in all fields');
    }
}

// Email
function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:allenjohnjoy2004@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
        name
    )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
}

// Hero  Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroLeft = document.querySelector('.hero-left');
    const heroRight = document.querySelector('.hero-right');

    if (heroLeft && heroRight && scrolled < window.innerHeight) {
        heroLeft.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroRight.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Scroll Animations
ScrollReveal().reveal('.hero-left', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    delay: 300
});

ScrollReveal().reveal('.hero-right', {
    origin: 'right',
    distance: '50px',
    duration: 1000,
    delay: 500
});

ScrollReveal().reveal('.navbar', {
    origin: 'top',
    distance: '20px',
    duration: 800,
    delay: 200
});

ScrollReveal().reveal('.about-img', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.about-content', {
    origin: 'right',
    distance: '50px',
    duration: 1000,
    delay: 300
});

ScrollReveal().reveal('.contact-section', {
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 300
});
