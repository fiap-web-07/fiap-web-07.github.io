// trabalhando com JS em um arquivo externo

console.log(nome, "chamando variável criada com var");

var nome = "Beatriz";

// escreve('Exemplo')

// function escreve(titulo){
//     alert(titulo);
// }

// existem 4 formas de criar funções no JavaScript

// função nominal - sofre hoisting
function mudaTitulo(novoTitulo){
    document.querySelector("h1").innerHTML = novoTitulo;
}
mudaTitulo("Vai Corinthians");

// expressão de função - Function Expression (uma função que é armazenada numa variável)
// função anônima (que não tem nome)
const mudaTitulo2 = function(novoTitulo) {
    document.querySelector("h2").innerHTML = novoTitulo;
};

mudaTitulo2("Trocando o subtitulo");

// arrow function - é uma função criada no ES6 ou ES2015 não existe o this dentro de uma arrow function; não existe um método construtor; sintaxe mais simples e prática 
const relogio = () => {
    const date = new Date();
    mudaTitulo2(date.toLocaleTimeString());
};
setInterval(relogio, 1000);