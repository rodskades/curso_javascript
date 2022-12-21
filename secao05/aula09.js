// Aprendendo sobre Hoisting

console.log(nome);  // Em outras linguagens, isto retornaria um erro. Mas aqui ocorre o Hoisting ('içamento') e retorna-se undefined

var nome = 'Geek';  // A declaração da variável só acontece aqui.

console.log(nome);

/*
O que acontece é que o JavaScript define:
var nome;

por baixo dos panos para que se evite o erro.

Isto só acontece ao utilizar var. Ao usar let ou const o erro ReferenceError será gerado.
*/

// Outro exemplo:

console.log(idade + 1);  // Isto irá retornar um NaN - Not a Number

var idade = 23;

console.log(idade + 1);