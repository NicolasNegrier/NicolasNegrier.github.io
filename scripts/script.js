const app = {
    
    // Animation Text header
    headerAnimate: () => {
        const h1HeaderElm = document.querySelector('header h1');

        const writeH1 = new Typewriter(h1HeaderElm, {
            loop: false,
        });

        writeH1
            .typeString('Developpeur Web')
            .start();


        const h2HeaderElm = document.querySelector('header h2');

        const writeH2 = new Typewriter(h2HeaderElm, {
            loop: true,
            delay: 175,
        });

        writeH2
            .typeString('FrontEnd <span style="color: #FF4500">HTML</span>')
            .pauseFor(2000)
            .deleteChars(4)
            .typeString('<span style="color: #01438E"> CSS</span>')
            .pauseFor(2000)
            .deleteChars(3)
            .typeString('<span style="color: #F0DB4F"> JavaScript</span>')
            .pauseFor(2000)
            .deleteChars(10)
            .typeString('<span style="color: #61dafb"> React</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('BackEnd <span style="color: #83CD29"> Node</span>')
            .pauseFor(2000)
            .deleteChars(4)
            .typeString('Express')
            .pauseFor(2000)
            .deleteChars(7)
            .typeString('<span style="color: #2379BD"> Sequelize</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('FullStack JavaScript')
            .pauseFor(2000)
            .deleteAll()
            .start();
    },

    // Apparition element au scroll
    
    scrollListner: () => {
        const ratio = 0.30;
        const observer = new IntersectionObserver(app.handleScroll, {threshold: ratio});

        const hardSkillElms = document.querySelectorAll('.hard-skill__cat');
        hardSkillElms.forEach(hardSkillElm => {
            observer.observe(hardSkillElm);
        })

        const softSkillElms = document.querySelectorAll('.soft-skill__item');
        softSkillElms.forEach(softSkillElm => {
            observer.observe(softSkillElm);
        })
        
    },

    handleScroll: (entries) => {
        entries.forEach(entry => {
            const targetElm = entry.target;
            // console.log(entry.target);
            const softSkillFirstChildElm = entry.target.firstElementChild;
            const softSkillLastChildElm = entry.target.lastElementChild;
            if (entry.isIntersecting) {
                
                if (targetElm.classList[0] === "hard-skill__cat") {
                    console.log('visible hard');
                    targetElm.classList.add('translateY');
                }else if (targetElm.classList[0] === "soft-skill__item") {
                    console.log('visible soft');
                    targetElm.classList.add('translateX-droite');
                    softSkillFirstChildElm.classList.add('translateX-gauche');
                    softSkillLastChildElm.classList.add('translateX-gauche');
                }
            }else {
                console.log('non visible');
                if (targetElm.classList[0] === "hard-skill__cat") {
                    targetElm.classList.remove('translateY');
                }else if (targetElm.classList[0] === "soft-skill__item") {
                    targetElm.classList.remove('translateX-droite');
                    softSkillFirstChildElm.classList.remove('translateX-gauche');
                    softSkillLastChildElm.classList.remove('translateX-gauche');
                }
            }
        });
        
    },

    init: () => {
        app.headerAnimate();
        app.scrollListner();
    },
};

window.addEventListener("DOMContentLoaded", (event) => {
    app.init();
  });
    