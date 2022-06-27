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

    initCss: () => {
        const Elm = document.querySelector();
    },

    // scrollListner: () => {
    //     const options = {
    //         // root: document.querySelector('#presentation'),
    //         rootMargin: '0px',
    //         threshold: 1.0
    //       }
          
    //     const observer = new IntersectionObserver(app.handleScroll, options);

    //     const elm = document.querySelector('#hard-skill');
    //     observer.observe(elm);
    // },

    // handleScroll: (event) => {
    //     console.log('coucou');
    // },

    init: () => {
        app.headerAnimate();
        app.scrollListner();
    },
};

window.addEventListener("DOMContentLoaded", (event) => {
    app.init();
  });
    