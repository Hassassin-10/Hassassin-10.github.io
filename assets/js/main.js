// Preloader
window.addEventListener('load', () => {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    loaderWrapper.style.opacity = '0';
    setTimeout(() => {
        loaderWrapper.style.display = 'none';
    }, 500);
});

// AOS Initialization
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add Formspree endpoint or custom form handling
    alert('Thank you! Your message has been sent.');
});