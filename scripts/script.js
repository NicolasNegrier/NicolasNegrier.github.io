const h1HeaderElm = document.querySelector('header h1');

const writeH1 = new Typewriter(h1HeaderElm, {
    loop: true,
    delay: 175,
});

writeH1
    .typeString('Developpeur Web')
    .pause(2500)
    .deleteAll()
    .start();


const h2HeaderElm = document.querySelector('header h2');

const writeH2 = new Typewriter(h2HeaderElm, {
    loop: true,
    delay: 175,
});

writeH2
    .typeString('FrontEnd <span style="color: #01438E">HTML</span>')
    .pause(2500)
    .deleteAll()
    .typeString('FullStack JavaScript')
    .pause(2500)
    .deleteAll()
    .start();