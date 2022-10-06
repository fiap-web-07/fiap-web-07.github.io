const aereasNacionais = ['Azul', 'Gol', 'Latam'];
const airCompanies = [...aereasNacionais, 'Delta', 'Unired Airlines', 'Emirates', 'Qatar', 'Tap'];

console.log(airCompanies);

// atribuição por desestruturação
const [azul, voeGol, latam, delta, ...internacionais] = airCompanies;
console.log(delta, 'verificando a variável delta');
console.log(internacionais, 'verificando a variável internacionais');

const user = {
    name: "Beatriz",
    email: "beatrizmoraes444@gmail.com",
    password: "q1w2e3"
}

const {password, ...data} = user;
console.log(data, 'retornando user');

//eventos - JavaScript é uma linguagem dirigida a eventos. Algo acontece, então reagimos.
// Eventos de tempo - setTimeout, setInterval
// Eventos de DOM - onClick, onChange, onSubmit
// Eventos de teclado - onKeyDown, onKeyUp, onKeyPress
// Eventos de mouse - onMouseDown, onMouseUp, onMouseMove
// Eventos de formulário - onFocus, onBlur, onChange
// Eventos de mídia - onPlay, onPause, onEnded
// Eventos de rede - onLoad, onError, onAbort
// 5 grandes áreas do JS: Funções; Arrays; Eventos; Assíncrono; Controle de fluxo - estrutura controle e loops; Objetos
// javascript.info

const body = document.querySelector("body");
body.style.width = "100%";
body.style.height = "100vh";

body.addEventListener("mouseover", (event) => {
    body.style.backgroundColor = "#d4d4d4";
    console.log("executou o evento");
})

