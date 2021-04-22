// AdLap 2021

const menuAnimation = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const media = window.matchMedia('(min-width: 750px)');


// BURGER ANIMATION

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

media.addEventListener('change', function (e) {
    if (e.matches) {
        menuAnimation.classList.remove('menu-visible');
        menu.style.transform = 'translateY(0)';
    }

    if (!e.matches) {
        menu.style.transform = 'translateY(-215px)';
    }
});

// FORM VALIDATION

