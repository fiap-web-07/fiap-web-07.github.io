// diferenças entre arrow function e funções nominais ou expressões de função.

const resultado = document.querySelector("#resultado");
let myFunc1 = {
    showArguments() {
        resultado.innerHTML = arguments;
        console.log(arguments);
    },
};

// chamando a função

myFunc1.showArguments(
    "Vai Corinthians",
    "Fullstack developer",
    "React",
    "NodeJS",
    "TypeScript"
);

let myFunc2 = {
    showArguments: () => {
        // resultado.innerHTML = arguments;
        // console.log(...arguments);
    },
};

myFunc2.showArguments(
    "Vai Corinthians",
    "Fullstack developer",
    "React",
    "NodeJS",
    "TypeScript"
);

let user = {
    name: "Beatriz",
    usandoArrow: () => {
        console.log("Meu nome é ", this.name, "arrow function")
    },
    usandoNominal(){
        console.log("Meu nome é ", this.name, "nominal function")
    }
}

user.usandoArrow();
user.usandoNominal();
