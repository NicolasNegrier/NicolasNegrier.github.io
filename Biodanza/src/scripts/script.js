const app = {
    toggleMenu: () => {
        // MENU TOGGLE
        const burgerToggler = document.querySelector('.burger');
        const navLinksContainer = document.querySelector('.nav__link');

        const toggleNav = () => {

            burgerToggler.classList.toggle('open');
            navLinksContainer.classList.toggle('open');
        }

        burgerToggler.addEventListener('click', toggleNav);
        navLinksContainer.addEventListener('click', toggleNav);
    },

    // Chargement du contenu de data.js
    dataLoad: () => {

        for (i=0 ; i < data.events.length ; i++ ) {

            number = i + 1;
            app.cardCreate(number);
            // Creation d'un H3 pour le titre dans la div title du header
            let title = document.createElement('h4');
            title.innerText = data.events[i].title;
            // Creation d'un descriptif
            let desc = document.createElement('p');
            desc.innerText = data.events[i].description;
            // Creation d'une date
            let date = document.createElement('p');
            date.innerText = data.events[i].date;
            // Récupération du parent et ajout de notre titre au parent
            let parentTitle = document.getElementById('card'+ number );
            parentTitle.appendChild(title);
            parentTitle.appendChild(desc);
            parentTitle.appendChild(date);
        }
    },

    // Creation d'une card
    cardCreate: (number) => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.id = 'card' + number;
        let cardParent = document.getElementById('section4__cards');
        cardParent.appendChild(card);
    },

    init: () => {
        app.toggleMenu();
        app.dataLoad();
    },
};

window.addEventListener("DOMContentLoaded", () => {
    app.init();
  });

// A chaque changement de taille de fenetre, execusion de la fonction windowSeize
window.onresize = app.windowSeize;
    