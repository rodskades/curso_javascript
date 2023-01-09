// SET - Conjuntos 

/*
    - Conjuntos não aceitam repetição de valores;
    - Conjuntos não são indexados;
*/

// Declarando um conjunto:
let cursos = new Set();

// Adicionando valores ao conjunto:
cursos.add('Programação para Leigos');
cursos.add('Algoritmos e Lógica de Programação');

// Adicionar valores concatenados:
cursos.add('Programação em C').add('Programação em Java').add('Programação em Python');

cursos.add('Bancos de Dados SQL e NoSQL').add('Programação Web com Django Framework.');

cursos.add('Bancos de Dados SQL e NoSQL') // Como este já foi adicionado, ele não é adicionado novamente!
//console.log(cursos);

// Acessando o tamanho do conjunto:
//console.log(cursos.size);

// Verificando se algo está no conjunto:
//console.log(cursos.has('Programação em C'));  // true

// Deletar elementos de um conjunto:
//cursos.delete('Programação para Leigos');  // Esta função retorna true ou false dependendo se ele achou ou não o elemento.
//console.log(cursos);

// A partir de um array, é possível declarar um conjunto:
let frutas = ['Manga', 'Uva', 'Jaca', 'Uva'];
let frutas_unicas = new Set(frutas);

console.log(frutas_unicas);