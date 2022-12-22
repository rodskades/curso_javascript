// Aprendendo sobre Funções Closures

/*
let variavel = 'global';  // Esta variável pode ser acessada globalmente

function imprimir(){
    console.log(variavel);
}

function outra(){
    let variavel = 'local';  // Esta variável pode ser acessada apenas localmente no bloco
    imprimir();
}

// O que acontece agora?
outra();  // Imprime-se 'global'.

// A linguagem JavaScript vai dar prioridade para a variável global.
*/

// Outro exemplo:
let variavel = 'global';

function externa(){
    let variavel = 'local';

    function interna(){
        return variavel;  // Agora como está sendo retornado...
    }

    return interna;
}

let executa = externa();

console.log(executa());  // ...aqui será retornado 'local'.
