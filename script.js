// ===== Skill Bar Animation =====
const skillBars = document.querySelectorAll('.skill-bar-fill');
const options = { threshold: 0.5 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.width = entry.target.getAttribute('data-fill');
        }
    });
}, options);
skillBars.forEach(bar => observer.observe(bar));

// ===== Scroll Reveal =====
const revealElements = document.querySelectorAll('section h2, section p');
window.addEventListener('scroll', () => {
    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const height = window.innerHeight;
        if(top < height - 100) el.style.opacity = 1;
    });
});
