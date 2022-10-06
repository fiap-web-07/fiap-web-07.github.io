const carrosDOM = document.querySelector("#carros");
const veiculos = ["Chevrolet", "Ford", "Fiat", "Volkswagen", "Honda", "Toyota", "Hyundai"]

// adiciona no final do array
veiculos.push("BMW", "Mercedes");

// adiciona no início do array
veiculos.unshift("Audi");

// removendo do início do array
const primeiro = veiculos.shift();
console.log('Removendo o primeiro elemento do array', primeiro);

// removendo do final do array
const ultimo = veiculos.pop();
console.log('Removendo o último elemento do array', ultimo);

// removendo um elemento do array
const posicao = 2;
const quantidade = 1;
const removido = veiculos.splice(posicao, quantidade);

// removendo mais de um elemento do array
const removidos = veiculos.splice(1, 2);

// removendo e adicionando elementos
const removidos2 = veiculos.splice(1, 2, 'Ferrari', 'Lamborghini');

veiculos.forEach((value, key) => {
    carrosDOM.innerHTML += `<option value= "${key}">${value}</option>`;
});

// splice: adiciona e remove elementos
const nbaTeams = ['Warriors', 'Raptors', 'Lakers', 'Celtics', 'Bucks', '76ers'];
console.log(nbaTeams);

// slice: retorna um novo array, o primeiro parâmetro é opcional e começa em zero, o último parâmetro determina até onde deve ser filtrado, porém não incluindo este último elemento
// imutabilidade: os dados não mudam, eles evoluem
const newNba = nbaTeams.slice(3, 5);
console.log(newNba); // newNba = [Celtics, Bucks] nbaTeams = ['Warriors', 'Raptors', 'Lakers', 'Celtics', 'Bucks', '76ers']
const new2 = nbaTeams.slice(-1);
console.log(new2, 'Último');

// map, filter, reduce, find, findIndex, search, sort, reverse, split, join, substring

const name = 'Beatriz Moraes Attorre';
const nameArray = name.split(" ");
const nameComplete = [nameArray[0], nameArray.slice(-1)].join(' ');
console.log(nameComplete);

const procuraCeltic = (nomeTime) => {return nomeTime == 'Celtics' || nomeTime == 'Raptors';};

const celticsMap = nbaTeams.map(procuraCeltic); // retorna um novo array, mapeando e buscando no array anterior
console.log(celticsMap, 'map');

const celticsFilter = nbaTeams.filter(procuraCeltic); // retorna um novo array, procura do começo ao fim do array anterior, quem retornou true para a função usada
console.log(celticsFilter, 'filter');

const celticsFind = nbaTeams.find(procuraCeltic); // retorna a primeira ocorrência de uma busca com o parâmetro que a função determinou
console.log(celticsFind, 'find');
