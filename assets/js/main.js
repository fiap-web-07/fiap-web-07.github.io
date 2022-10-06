// trabalhando com JS em um arquivo externo

console.log(nome, "chamando variável criada com var");

var nome = "Beatriz";

// escreve('Exemplo')

// function escreve(titulo){
//     alert(titulo);
// }

// existem 4 formas de criar funções no JavaScript

// função nominal - sofre hoisting
function mudaTitulo(target, novoTitulo){
    document.querySelector(target).innerHTML = novoTitulo;
}
mudaTitulo("h1", "Vai Corinthians");

// expressão de função - Function Expression (uma função que é armazenada numa variável)
// função anônima (que não tem nome)
const mudaTitulo2 = function(target, novoTitulo) {
    document.querySelector(target).innerHTML = novoTitulo;
};

mudaTitulo2("h2", "Trocando o subtitulo");

// arrow function - é uma função criada no ES6 ou ES2015 não existe o this dentro de uma arrow function; não existe um método construtor; sintaxe mais simples e prática 
const relogio = () => {
    const date = new Date();
    mudaTitulo2("h2", date.toLocaleTimeString());
};
setInterval(relogio, 1000);



// DESAFIO
const frases = [
    "A vida é bela",
    "A vida é uma dádiva",
    "A vida é curta",
];
const mudaFrase = function (tag, frases, tempo){
    let total = 0;
    setInterval(() => {
        document.querySelector(tag).innerHTML = frases[total >= frases.length - 1? (total = 0) : (total += 1)];
    }, tempo * 1000);
};

mudaFrase("h1", frases, 4);