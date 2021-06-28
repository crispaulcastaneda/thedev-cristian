"use strict"


// MENU Constants
const nav__menu = document.getElementById('nav-menu'),
      toggle__menu = document.getElementById('nav-toggle'),
      close__menu = document.getElementById('nav-close');

// SHOW
toggle__menu.addEventListener('click', () => {
    nav__menu.classList.toggle('show');
});

// HIDDEN
close__menu.addEventListener('click', () => {
    nav__menu.classList.remove('show');
})

// REMOVE MENU
const nav__link = document.querySelectorAll('.nav__link');

function linkAction() {
    nav__menu.classList.remove('show')
}
nav__link.forEach(n => n.addEventListener('click', linkAction));

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);
function scrollActive() {

    const scrollY = window.pageYOffset;

    sections.foreach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.remove('active');
        }
    });
}