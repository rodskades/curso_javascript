// Aprendendo a utilizar o MAP

var valores = [2, 4, 6, 8, 10];

// É possível criar uma função separada e passar para o map ou só passar direto a função anônima:
var dobro = valores.map(function(valor){
    return valor * 2;
});

// console.log(dobro);

// Encadeando maps para realizar múltiplas transformações:

function soma_4(valor){
    return valor + 4;
}

function dividir_por_5(valor){
    return valor / 5;
}

var resultado = valores.map(soma_4).map(dividir_por_5);
console.log(resultado);