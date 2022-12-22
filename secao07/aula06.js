// Declarando instâncias de classes

class Pessoa {  // Sempre usar letra maiúscula (igual lá no Python)
    constructor(nome, sobrenome){  // constructor para construir a classe (igual o __init__ do Python)
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome(){    // Funções get retornam determinado atributo
        return this._nome;
    }

    set nome(nome){  // Funções set permitem alterar determinado atributo
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }

    falar(msg){
        console.log(`${this.nome} está falando: ${msg}`);
    }

    comer(){
        console.log(`${this.nome} está comendo.`);
    }

    beber(){
        console.log(`${this.nome} ${this.sobrenome} está bebendo.`);
    }
}

class Carro {
    constructor(modelo){      // O constructor pode ter apenas uma entrada mas ter vários atributos sendo definidos
        this._marca = "Honda";
        this._modelo = modelo;
    }

    get marca(){
        return this._marca;
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(modelo){
        this._modelo = modelo;
    }

    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }

}

// Forma 1 de instanciar objetos (com o new):
/*
const curso = new Object();   // Um objeto genérico
curso.nome = 'Programação em JavaScript';  // É possível adicionar atributos dinamicamente em objetos
curso.preco = 27.99;
curso['qtd_alunos'] = 999;

console.log(curso);

delete curso['qtd_alunos'];  // É possível também deletar dinamicamente atributos

console.log(curso);
*/

// Forma 2 de instanciar objetos (de forma literal):
/*
const programa = {
    nome: 'Photoshop',
    preco: 8999.90,
    fabricante: {
        nome: 'Adobe',
        contato: 'contato@adobe.com',
        endereco: {
            rua: 'Whatever, 45',
            bairro: 'Whatever2',
            cidade: 'Qualquer',
        },
    filiais: [
        {cidade: 'Rio de Janeiro'},
        {cidade: 'Recife'}
    ]
    }
}

console.log(programa);
console.log(programa.nome);  // Photoshop
console.log(programa.fabricante.nome);  // Adobe
console.log(programa.fabricante.filiais.length);  // 2
console.log(programa['fabricante']['filiais'].length); // 2, apenas outra forma de acessar
*/

// Forma 3 de instanciar objetos (de forma literal em objeto vazio):
/*
const pessoa = {};
pessoa.nome = 'Angelina'
console.log(pessoa);
*/

// Forma 4 de instanciar objetos (com função construtora a partir das classes):

const p1 = new Pessoa('Felicity', 'Jones');
console.log(p1);
console.log(typeof(p1));  // Verificando que se trata de um objeto
console.log(p1.nome);    // Utiliza-se aqui a função get, não o atributo diretamente
console.log(p1.sobrenome);  // Mesma coisa aqui, a função get é acessada

p1.nome = 'Xuxa';    // Aqui acessamos a função set para fazer esta alteração
console.log(p1.nome);

p1.falar('Olá baixinhos!');  // Utilizando os métodos da classe
p1.comer();
p1.beber();

// Outro exemplo:
const fit = new Carro('Fit');
fit.imprimir();
