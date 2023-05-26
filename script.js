const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.menu-items');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuItems.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    const target = event.target;
    if (!menu.contains(target) && menuItems.classList.contains('active')) {
        menuToggle.classList.remove('active');
        menuItems.classList.remove('active');
    }
});
