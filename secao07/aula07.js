// Objetos e suas funções

const curso = {
    nome: 'Programação em JavaScript',
    horas: 25,
    preco: 27.99,
}

//console.log(curso);
//console.log(typeof(curso));

// Para descobrir quais chaves um objeto possui:
//console.log(Object.keys(curso));

// Para descobrir os valores de um objeto:
//console.log(Object.values(curso));

//console.log(Object.entries(curso));

// Como entries retorna um array de arrays:
//Object.entries(curso).forEach( par => {
//    console.log(`${par[0]}: ${par[1]}`);
//});

//Object.entries(curso).forEach(([chave, valor]) => {
//    console.log(`${chave}: ${valor}`);
//});

// É possível também criar separadamente cada atributo da forma:
/*
Object.defineProperty(curso, 'publicacao', {
    enumerable: true,  // Define se será exibido ou não ao imprimir o objeto
    writable: false,   // Define se é possível alterar
    value: '07/12/2019'
});

console.log(curso);
*/

// É possível também 'congelar' o objeto para que ele não seja alterado.
/*
Object.freeze(curso);

curso.nome = 'Whatever';

console.log(curso);  // Não houve alteração
*/

// Outra forma de impressão interessante se houver uma array de objetos:
const usuarios = [
    {nome: 'Whatever', empresa: 'Geek University'},
    {nome: 'Together', empresa: 'Google'},
    {nome: 'Together Junior', empresa: 'Sony'},
]

console.table(usuarios);