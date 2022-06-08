const cards = {

// CARD CONTACT
    handleContact: (event) => {

        console.log("tu as cliqué sur contact");
        const contact = document.querySelector('#contact');
        console.log(contact);
        //récupération du container
        const firstRow = document.querySelector('.first-row');

        if (!contact) {
            // Création de la section avec id contact
            const contact = document.createElement('section');
            contact.classList.add('right-card', 'new-card');
            contact.id = 'contact';
            firstRow.appendChild(contact);
        }else {
            contact.remove();
        }

        // // Création du h2 de contact
        // const h2 = document.createElement('h2');

        // // Création de la div class "icons"
        // const icons = document.createElement('div');
        // icons.className = 'icons';

        // // Création des icons de la div class "icons"
        // const phone = document.createElement('i');
        // phone.className = "fa-solid fa-3x fa-phone"

        // const mail = document.createElement('i');
        // mail.className = "fa-solid fa-3x fa-envelope";

        // const linkedin = document.createElement('i');
        // linkedin.className = "fa-brands fa-3x fa-linkedin";

        // const github = document.createElement('i');
        // github.className = "fa-brands fa-3x fa-github";

        // // Créations de la nav class "nav-right"
        // const nav = document.createElement('nav');
        // nav.className = "nav-right";

        // // Création du a dans la nav
        // const hardskills = document.createElement('a');
        // hardskills.textContent = "Hard Skills";

        //Ajout des éléments dans chacun des parents

        // contact.appendChild(h2);
        // contact.appendChild(icons);
        // contact.appendChild(nav);

        // icons.appendChild(phone);
        // icons.appendChild(mail);
        // icons.appendChild(linkedin);
        // icons.appendChild(github);



    },

    contactClic() {
        const lien = document.querySelector('#add-contact');
        lien.addEventListener('click', cards.handleContact);
    },

    

    
    init: () => {
        console.log("document bien chargé");
        cards.contactClic();
    }
};

window.addEventListener("DOMContentLoaded", (event) => {
    cards.init();
  });
