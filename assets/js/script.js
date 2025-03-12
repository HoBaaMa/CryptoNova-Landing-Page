let menu = document.querySelector('#menu-icon');
let links = document.querySelector('.links');

menu.onclick = () => {
    menu.classList.toggle('bg-x');
    links.classList.toggle('open');
};

ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
}).reveal('.hero-text', { delay: 200, origin: 'top' });

ScrollReveal().reveal('.hero-img', { delay: 450, origin: 'top' });
ScrollReveal().reveal('.sidebar', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.scroll-down', { delay: 500, origin: 'right' });