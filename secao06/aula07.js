// Aprendendo sobre Funções Callback

const cursos = [
    'Programação para Leigos',
    'Algoritmos e Lógica de Programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Bancos de Dados',
    'Programação Web com Django Framework',
    'Programação em JavaScript'
]

/*
function apresentar(curso, indice){
    console.log(`${indice+1} - ${curso}`);
}

cursos.forEach(apresentar);  // Aqui está ocorrendo o callback

// Usando lambda:
cursos.forEach(function(curso, indice){
    console.log(`${indice+1} - ${curso}`);
});
*/

// O Callback nada mais é do que passar uma função como parâmetro para outra função que será executada mediante certo evento.


// Outro exemplo
const precos = [23.55, 87.23, 899.43, 12.89, 5.23, 67.45];

let menores = [];

for(let p in precos){
    if(precos[p] < 50){
        menores.push(precos[p]);
    }
}

// console.log(menores);

// Outra forma de resolver este problema:
menores = precos.filter(function(preco){
    return preco < 50;
});

// console.log(menores);

// Ou ainda mais simples:
menores = precos.filter(preco => preco < 50);

console.log(menores);