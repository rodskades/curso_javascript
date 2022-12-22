// Introdução a funções - First Class Citizens

function somar(num1, num2){
    return num1 + num2;
}

// Para executar a função, podemos armazenar o retorno em variáveis:

let res = somar(4, 6);
//console.log(res);

// Ou só executar diretamente:
//console.log(somar(10, 5));

// É possível "transferir" a função para uma variável:
const executar = somar;

//console.log(executar(8, 7));

// Concatenando funções:
function subtrair(num1, num2){
    return num1 - num2;
}

function faz_algo(num1, num2, funcao){
    return funcao(num1, num2);
}

console.log(faz_algo(5, 5, somar));
console.log(faz_algo(8, 3, subtrair));


// Outro exemplo:

function outra(funcao){
    return funcao;
}

const ret = outra(somar);
console.log(ret(8, 2));

// Quando uma função não retorna nada, ela retorna "undefined". Exemplo:

function mensagem(){
    console.log('Evolua seu lado geek!');
}

console.log(mensagem());

// Uma função pode ser utilizada como um tipo de dado:
let valores = [1, 3.4, true, somar];

valores.forEach(function(valor){
    console.log(typeof(valor));
});

// O "tipo" de uma função é "function" para o JavaScript.