
window.addEventListener("DOMContentLoaded", (event) => {

});
// DEPLACEMENT DE LA FENETRE AU CLIC
const navLinks = [...document.querySelectorAll('nav a')];
const sections = [...document.querySelectorAll('section')];

let sectionsPosition;

function getPosition() {
    sectionsPosition = sections.map(section => section.offsetTop);
}
getPosition();
navLinks.forEach(link => link.addEventListener("click", addNavSmooth));

function addNavSmooth (event) {
    const linkIndex = navLinks.indexOf(event.target);
    console.log(navLinks[linkIndex]);
    console.log(sectionsPosition[linkIndex]);
    window.scrollTo({
        top: sectionsPosition[linkIndex],
        behavior: "smooth",
    });
}

window.addEventListener("resize", getPosition);


// MENU TOGGLE
const burgerToggler = document.querySelector('.burger');
const navLinksContainer = document.querySelector('.nav__link');

const toggleNav = () => {

    burgerToggler.classList.toggle('open');
    navLinksContainer.classList.toggle('open');
}

burgerToggler.addEventListener('click', toggleNav);
navLinksContainer.addEventListener('click', toggleNav);