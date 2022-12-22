// Declarando métodos de classes

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
        this._marca = 'Honda';
        this._modelo = modelo;
    }

    get marcar(){
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
