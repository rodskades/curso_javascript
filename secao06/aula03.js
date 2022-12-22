// Funções com parâmetros e retornos:

// Com retorno é possível armazenar a variável para utilizar depois:
function calcular_idade(ano_nascimento){
    const data = new Date();  // gera a data atual

    const idade = data.getFullYear() - ano_nascimento;

    return idade;
}

console.log(calcular_idade(1998));

// Sem retorno não é possível armazenar a variável:
function calcular_idade2(ano_nascimento){
    const data = new Date();

    const idade = data.getUTCFullYear() - ano_nascimento;

    console.log(idade);
}

calcular_idade2(1998);

// Fique esperto!

function somar(num1, num2){
    return num1 + num2;
}

console.log(somar(4, 6));  // 10
console.log(somar(4));     // NaN - Not a Number, o JavaScript não calcula nada.
console.log(somar(4, 6, 2));  // 10 - O JavaScript vai calcular utilizando os dois primeiros e ignorar o terceiro.
