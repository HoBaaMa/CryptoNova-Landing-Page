let menu = document.querySelector('#menu-icon');
let links = document.querySelector('.links');

menu.onclick = () => {
    menu.classList.toggle('bg-x');
    links.classList.toggle('open');
}