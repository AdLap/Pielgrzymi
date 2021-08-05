// AdLap 2021
import React from "react";
import ReactDOM from "react-dom";
import {Form} from "./form";

const menuAnimation = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const mediaWidth = window.matchMedia('(min-width: 1200px)');
const mediaHeight = window.matchMedia('(min-height: 650px)');

// BURGER ANIMATION
menuAnimation.addEventListener('click', function () {
    menuAnimation.classList.toggle('menu-visible');

    if (menuAnimation.classList.contains('menu-visible')) {
        menu.style.transform = 'translate(-400px)'
    }

    if (!menuAnimation.classList.contains('menu-visible')) {
        menu.style.transform = 'translate(0)';
    }
});

menu.addEventListener('click', function () {
    menu.style.transform = 'translate(0)';
    menuAnimation.classList.remove('menu-visible');
});

mediaWidth.addEventListener('change', function (e) {
    if (e.matches) {
        menuAnimation.classList.remove('menu-visible');
        menu.style.transform = 'translateY(0)';
    }

    if (!e.matches) {
        menu.style.transform = 'translateY(-215px)';
    }
});

mediaHeight.addEventListener('change', function (e) {
    if (e.matches) {
        menuAnimation.classList.remove('menu-visible');
        menu.style.transform = 'translateY(0)';
    }

    if (!e.matches) {
        menu.style.transform = 'translateY(-215px)';
    }
});

// FORM

const Shop = () => <Form />

ReactDOM.render(<Shop/>, document.getElementById("form__container"));


// GALLERY

/* json-server --watch db.json */

