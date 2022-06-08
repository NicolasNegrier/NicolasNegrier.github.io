
window.addEventListener("DOMContentLoaded", (event) => {

});

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
    console.log(linkIndex);
    console.log(sectionsPosition[linkIndex]);
    window.scrollTo({
        top: sectionsPosition[linkIndex],
        behavior: "smooth",
    });
}