// Introdução a arrays

/*
Array contendo 5 elementos -> n = 5
// Índices:
[0][1][2][3][4]

// Valores:
[12, 24, 36, 48, 52]

// Detalhes sobre arrays:
- Possuem tamanho infinito (depende da memória do computador, claro)
- Podemos colocar qualquer tipo de dado

*/

// Criando Arrays
// Forma 1:

var alunos = new Array('Cristina', 'Ricardo', 'Lucas', 'Maria', 'Sofia');
//console.log(alunos);

// Forma 2:
var notas = [1, 3, 5, 7, 9];
//console.log(notas);

// Criando um array vazio:
var dados = [];
//console.log(dados);

// Fazendo acesso ao valor de um índice:
//console.log(notas[2]);

// Alterando o valor a partir do índice:
notas[2] = 12;
//console.log(notas);

// Atenção ao acessar um valor com um índice que não existe!!
notas[9] = 10;  // Não existe!
//console.log(notas);

//console.log(notas[5]);  // "Undefined"

// Uma forma de arrumar isto:
//console.log(notas[5] == undefined);  // true

if(notas[5] == undefined){
    notas[5] = 54;
}

//console.log(notas);

// Inserindo elementos no final do array:
var nomes = ['Paula', 'Maria', 'Julia'];
//console.log(nomes);

nomes.push('Vanessa');  // Insere o valor no final do array
//console.log(nomes);

// Tamanho do array:
//console.log(nomes.length);  // 4

// Ordenar os dados de um array:
var alunos = ['Vera', 'Lucia', 'Pedro', 'Fernanda', 'Mário', 'Ana', 'Carla'];
//console.log(alunos);

alunos.sort();
//console.log(alunos);

// Mas cuidado:
var precos = [123.55, 42.27, 546.99, 23.12]
//precos.sort()
//console.log(precos);  // Não funciona porque ele trata os dados dentro da array como se fossem strings

// Modo correto:
//precos.sort(function(a, b) {return a - b;});
//console.log(precos);

// Deletando dados de um array:
//delete precos[2]  // Deixa o espaço vazio
//console.log(precos);

//precos.splice(2, 1) // Assim ele a partir do índice 2, deleta 1 elemento
//console.log(precos);

// Utilizando o splice para adicionar elementos:
//precos.splice(2, 0, 34, 56);
//console.log(precos);

//precos.splice(2, 1, 23);  // A partir do índice 2, deleta 1 e adiciona 23
//console.log(precos);

// Iterar em um array:
for(var i = 0; i < precos.length; i++){
    //console.log(precos[i]);
}

// Removendo elementos da última posição do array:
//precos.pop();  // Remove e retorna o último elemento do array
//console.log(precos);

// Removendo o primeiro elemento do array:
//precos.shift();  // Remove e retorna o primeiro elemento de um array
//console.log(precos);

// Inserindo elementos no início de 1 array:
//precos.unshift(99);
//console.log(precos)

// Retornar um novo array a partir do índice informado:
//var novo = precos.slice(2);
//console.log(novo);

//var novo = precos.slice(1, 3);
//console.log(novo);

var pares = [2, 4, 6, 8, 10];
var impares = [1, 3, 5, 7, 9];

var rest = pares.concat(impares);  // concatena os dois arrays
//console.log(rest);

rest.sort(function(a, b){return a - b;});
//console.log(rest);

// Matriz 4x4
var tabuleiro = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

console.log(tabuleiro[0][0]); // linha 0 coluna 0
console.log(tabuleiro[2][2]); // linha 2 coluna 2
console.log(tabuleiro[0][3]); // linha 0 coluna 3
