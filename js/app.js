// AdLap 2021

const menuAnimation = document.querySelector('#burger');
const menu = document.querySelector('#menu');

menuAnimation.addEventListener('click', function () {
    menuAnimation.classList.toggle('menu-visible');

    if (menuAnimation.classList.contains('menu-visible')) {
        menu.style.transform = 'translate(-215px)'
    }

    if (!menuAnimation.classList.contains('menu-visible')) {
        menu.style.transform = 'translate(0)';
    }
});

menu.addEventListener('click', function () {
    menu.style.transform = 'translate(0)';
    menuAnimation.classList.remove('menu-visible');
});
