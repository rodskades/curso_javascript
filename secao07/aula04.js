// Declarando Atributos para classes:

class Pessoa {  // Sempre usar letra maiúscula (igual lá no Python)
    constructor(nome, sobrenome){  // constructor para construir a classe (igual o __init__ do Python)
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

class Carro {
    constructor(modelo){      // O constructor pode ter apenas uma entrada mas ter vários atributos sendo definidos
        this.marca = 'Honda';
        this.modelo = modelo;
    }

}

// Não se usa encapsulamento em JavaScript, todos os atributos são públicos em uma classe.
