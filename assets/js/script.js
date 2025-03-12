let menu = document.querySelector('#menu-icon');
let links = document.querySelector('.links');

menu.onclick = () => {
    menu.classList.toggle('bg-x');
    links.classList.toggle('open');
};

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.ScrollReveal('.hero-text', { delay: 200, origin: 'top' });
sr.ScrollReveal('.hero-img', { delay: 450, origin: 'top' });
sr.ScrollReveal('.sidebar', { delay: 500, origin: 'left' });
sr.ScrollReveal('.scroll-down', { delay: 500, origin: 'right' });