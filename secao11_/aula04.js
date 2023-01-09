// FOR OF

/*
let nome = 'Geek University';

for(let letra of nome){
    console.log(letra);
}
*/

// Outro exemplo:
/*
let numeros = [1, 2, 3, 4, 5];

for(let numero of numeros){
    console.log(numero * 2);
}
*/

// Outro exemplo:
/*
let numeros = [1, 2, 3, 4, 5];

for(let indice in numeros){
    console.log(`Índice: ${indice}, Valor: ${numeros[indice]}`);
}
*/

// Outro exemplo:
let cursos = new Map([
    [1, 'Programação para Leigos'],
    [2, 'Algoritmos e Lógica de Programação'],
    [3, 'Programação em C'],
    [4, 'Programação em Java'],
    [5, 'Programação em Python'],
    [6, 'Bancos de Dados'],
    [7, 'Programação Web com Django Framework']
]);

//for(let curso of cursos){
//    console.log(`${curso[0]} - ${curso[1]}`);
//}

// Chave/Valor:
//for(let curso of cursos){
//    console.log(curso);
//}

// Somente as chaves:
//for(let chave of cursos.keys()){
//    console.log(chave);
//}

// Somente os valores:
//for(let valor of cursos.values()){
//    console.log(valor);
//}

// Outra forma para Chave/Valor:
//for(let [chave, curso] of cursos.entries()){
//    console.log(`${chave} - ${curso}`);
//}

// Outro exemplo:
let conjunto = new Set([1, 2, 3, 4, 5, 5]);

for(let numero of conjunto){
    console.log(numero);
}
