// Entendendo e Usando as Arrow Functions

// Forma 1:
function somar1(num1, num2){
    return num1 + num2;
}

console.log(somar1(4, 6));

// Forma 2:
let somar2 = function(num1, num2){
    return num1 + num2;
}

console.log(somar2(4, 6));

// Arrow Functions:
let somar3 = (num1, num2) => {
    return num1 + num2;
}

console.log(somar3(4, 6));

// As Arrow Functions são simplificações da forma 2 de definição de funções.

// Atenção: Se sua função tem apenas 1 parâmetro de entrar e executa apenas uma linha, é possível simplificar ainda mais:
const dobrar = valor => valor * 2;

console.log(dobrar(3));

// Outro exemplo:
// Esta função:
function mensagem1(){
    console.log('Evolua seu lado geek!');
}

// Pode ser escrita dessa forma:
const mensagem2 = () => console.log('Evolua seu lado geek!');

mensagem1();
mensagem2();
