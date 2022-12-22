// Aprendendo sobre Funções Anônimas (Lambdas)

let numeros = [1, 2, 3, 4, 5, 6];
function dobrar(valor){
    return valor * 2;
}

let res1 = numeros.map(dobrar);

console.log(res1);

// É possível pular a etapa de criação da função separadamente usando funções anônimas:

let res2 = numeros.map(function(valor){
    return valor * 2;
});

console.log(res2);

// Outros exemplos de como utilizar funções anônimas:

let mostrar = function(n1, n2, calculo = dobrar){
    console.log(calculo(n1, n2));
}

mostrar(2);

mostrar(2, 4, function(n1, n2){
    return n1 + n2;
});

mostrar(3, 6, (v1, v2) => v1 * v2);
