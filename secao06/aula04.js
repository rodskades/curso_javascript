// Funções com parâmetros variáveis e valor padrão

// Por padrão, o JavaScript vai gerar um vetor arguments para lidar com parâmetros que não foram definidos previamente:
function somar(){
    let soma = 0;
    for(let i =0; i < arguments.length; i++){
        soma += arguments[i];
    }
    return soma;
}

/*
console.log(somar());  // Deve imprimir 0
console.log(somar(2));  // Deve imprimir 2
console.log(somar(2, 5));
console.log(somar(5, 3, 9));
*/

// Outro exemplo:
function imprime_valores(num1, num2){
    for(let i in arguments){
        console.log(arguments[i]);
    }
}

/*
imprime_valores();
imprime_valores(4, 6);
imprime_valores(4, 6, 8);
*/


// Agora é possível definir valores padrões para os parâmetros de uma função:
function somar2(num1 = 1, num2 = 2, num3 = 3){
    return num1 + num2 + num3;
}

console.log(somar2(4, 5, 6));  // 15
console.log(somar2());        // 6
console.log(somar2(2));       // 7
console.log(somar2(0, 0, 0)); // 0

// Caso seja passado algo não numérico:
console.log(somar2('a', 'b', 'c'));  // 'abc'
console.log(somar2(true, false, 'c'));  // '1c'
console.log(somar2(2, true, false))   // 3

// O JavaScript considera 'true' como 1 e 'false' como 0!

// É possível tratar isto:

function somar3(num1 = 1, num2 = 2, num3 = 3){
    if(Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)){
        return num1 + num2 + num3;
    }else{
        return 'Não foi possível somar.';
    }
}

console.log(somar3('a', 'b', 'c'));
