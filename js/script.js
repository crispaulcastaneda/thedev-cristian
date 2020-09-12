/** Show > Menu */

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

/** Active then Remove menu */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    // for active link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    // remove the toggle section after click
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/** Scrolling Animations */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    durationg: 2000,
    reset: true
})

/** Scroll animation Home */
sr.reveal('.home__title', {});
sr.reveal('.button', {delay: 200});
sr.reveal('.home__img', {delay: 400});
sr.reveal('.home__social-icon', {interval: 200});

/** Scroll animation About */
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', {delay: 200});
sr.reveal('.about__text', {delay: 400});

/** Scroll animation Skills */
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {delay: 200});
sr.reveal('.skills__techstack', {delay: 200});
sr.reveal('.skills__img', {delay: 400});

/** Scroll animation work */
sr.reveal('.work__img', {interval: 200});

/** Scroll animation Contact */
sr.reveal('.contact__input', {interval: 200});