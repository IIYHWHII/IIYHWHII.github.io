const mobileMenu = document.querySelector('.mobile-menu');
const menu = document.querySelector('.menu');

mobileMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});