// Aprendendo a utilizar Reduce

var precos = [4.66, 3.78, 9.78, 1.34, 5.32];

var soma = 0;

// Fazendo a soma dos valores com loop for:
for(var i = 0; i < precos.length; i++){
    soma = soma + precos[i];
}

//console.log(soma);

// Fazendo a soma dos valores com forEach:
var soma = 0;

precos.forEach(function(valor){
    soma += valor;
});

//console.log(soma);

// Finalmente, usando o Reduce:
function somar(anterior, atual){
    return anterior + atual;
}

var ret = precos.reduce(somar);
console.log(ret)

/*
Diferente das outras formas, o reduce pega os primeiros valores (índices 0 e 1), soma e retorna esse valor, e então utiliza o retorno para 
somar o valor do índice 2, e assim por diante.
*/

// Exemplo utilizando o map e reduce juntos:
function adicionar_taxa(valor){
    return valor + 5;
}

var ret = precos.map(adicionar_taxa).reduce(somar);
console.log(ret);

// Exemplo utilizando filter, map e reduce juntos:
function preco_maior_que_4(valor){
    return valor > 4;
}

ret = precos.filter(preco_maior_que_4).map(adicionar_taxa).reduce(somar);
console.log(ret);