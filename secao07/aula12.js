// Objetos vs JSON

/*
JSON - JavaScript Object Notation

Amplamente utilizado para comunicação entre sistemas, entre APIs, etc...
De modo geral, um formato de texto para comunicação.
*/

const curso = {
    nome: 'Programação em JavaScript',
    horas: 27,
    preco() {
        return this.horas * 0.67;
    }
}

/*
console.log(curso);
console.log(typeof(curso));

// Convertendo objetos JavaScript para JSON:
const json = JSON.stringify(curso);
console.log(json);
console.log(typeof(json));

// Convertendo de JSON para Objeto JavaScript:
const obj = JSON.parse(json);
console.log(obj);         // A função se perde, apenas se mantem dados.
console.log(typeof(obj));
*/

// Atenção ao formato de JSON:

const json_errado = "{'nome':'Programação em JavaScript','preco':27}";
//console.log(json_errado);
//console.log(typeof(json_errado));
//const novo_obj = JSON.parse(json_errado); // Isto irá gerar um Erro.

// Forma correta:
const json_corrigido = '{"nome":"Programação em JavaScript","preco":27}';
console.log(json_corrigido);
console.log(typeof(json_corrigido));
const novo_obj2 = JSON.parse(json_corrigido);
console.log(novo_obj2);
console.log(typeof(novo_obj2));