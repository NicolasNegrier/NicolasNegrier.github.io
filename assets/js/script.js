const game = {

    // Tableau alphabet
    alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  
    // Fonction de mélange du contenu d'un tableau
    shuffle: (tab) => {
        let i, j, tmp;
        for (i = tab.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = tab[i];
            tab[i] = tab[j];
            tab[j] = tmp;
        }
        return tab;
    },

    goodOrNot: (event, letterModel, cat) => {
        // Récupération de l'élément selectionné
        const src = event.target.src;

        // Découpage du chemin et stockage dans un tableau
        let srcArray = src.split('/');
        
        // Recupération du dernier element du tableau
        let response = srcArray.pop();
        let goodAnswer = letterModel + ".jpg";
        
        // Vérification si bonne réponse
        if (response == goodAnswer){
            if(window.confirm("BRAVO!!!! Une nouvelle partie?")){
                game.play(cat);
            }
        }else{
            alert("Essaie encore!")
        }
    },

    play: (cat) => {

        // Generation d'un tableau de chiffres au hazard
        let randomNumbers = [];

        // Génération de 3 nombres au hazard en evitant un double
        for (let i = 0; i < 3; i++){
            let randomNumber = Math.floor(Math.random() * 26);
            if (randomNumbers.find(el => el == randomNumber)) {
                i--;
            }
            randomNumbers.push(randomNumber);
        }

        // rest div container
        const container = document.querySelector(".container");
        container.textContent = "";

        const catSelected = cat.split('-');

        // Recupération des lettres correspondant à randomNumbers
        let randomLetter1 = game.alphabet[randomNumbers[0]];
        let randomLetter2 = game.alphabet[randomNumbers[1]];
        let randomLetter3 = game.alphabet[randomNumbers[2]];

        // Construction retour home page
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("buttonContainer");
        const linkButton = document.createElement("a");
        linkButton.href = "index.html";
        const homeButton = document.createElement("button");
        homeButton.classList.add("button");
        homeButton.textContent = "Changer de catégorie";
        const title = document.createElement("h1");
        title.textContent = cat;

        // Construction de la div model
        const divModel = document.createElement("div");
        divModel.classList.add("model");
        const imgModel = document.createElement("img");
        imgModel.src = "assets/img/" + catSelected[0] + "/" + randomLetter1 + ".jpg";

        // Construction de la div responses
        const divResponses = document.createElement("div");
        divResponses.classList.add("responses");

        // Construction des img reponse et insertion dans un tableau
        let responses = [];
        const imgResponse1 = document.createElement("img");
        imgResponse1.src = "assets/img/" + catSelected[1] + "/" + randomLetter1 + ".jpg";

        const imgResponse2 = document.createElement("img");
        imgResponse2.src = "assets/img/" + catSelected[1] + "/" + randomLetter2 + ".jpg";

        const imgResponse3 = document.createElement("img");
        imgResponse3.src = "assets/img/" + catSelected[1] + "/" + randomLetter3 + ".jpg";

        // Insertion des réponses dans un tableau
        responses.push(imgResponse1, imgResponse2, imgResponse3);

        // Melange des réponses dans le tableau
        let responsesShuffle = game.shuffle(responses);

        // Insertion des elements
        
        // Insertion du bouton de retour home
        container.appendChild(buttonContainer);
        buttonContainer.appendChild(linkButton);
        linkButton.appendChild(homeButton);
        buttonContainer.appendChild(title);

        // Insertion de la partie model
        container.appendChild(divModel);
        divModel.appendChild(imgModel);

        // Insertion de la partie réponses
        container.appendChild(divResponses);
        for (const response of responsesShuffle) {
            response.addEventListener("click", (event) => {game.goodOrNot(event, randomLetter1, cat)} );
            divResponses.appendChild(response);
        }
    },

    select: () => {
        // Récupération du choix de la partie
        const choices = document.querySelectorAll(".select");
        
        // Boucle sur le tableau des éléments pour y mettre un ecouteur d'evenement
        for (const choice of choices) {
            // recupération du data
            const choiceName = choice.dataset.name;
            choice.addEventListener("click", function (){ game.play(choiceName)})
        }
    }
    
};

function init() {
    console.log("chargement terminé");
    game.select();
} 


window.addEventListener("DOMContentLoaded", init);