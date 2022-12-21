// Aprendendo a diferença entre var, let e const

// var (escopo global)
var numero = 42;
console.log(numero);

numero += 18;
console.log(numero);

// let (permite o escopo local)
let outro_numero = 42;
console.log(outro_numero);

outro_numero += 18;
console.log(outro_numero);

/*
Ao criar um loop for, se for utilizado o var, as variáveis serão de escopo global, enquanto se utilizar o let será de escopo local:

for(let i = 0; i < 5; i++){
    let valor = i * 3;
    console.log(valor);
}

As variáveis i e valor neste caso não poderão ser acessadas fora do loop.
*/

// const (define um valor constante imutável)
const TAXA = 1.44;
console.log(TAXA);

let res = 45 * TAXA;
console.log(res);

//TAXA = 5;  // TypeError

/*
Dicas de como declarar variáveis em JavaScript:

- A variável poderá ser alterada? 
    Se sim, use let,
    Se não, use const.
*/
