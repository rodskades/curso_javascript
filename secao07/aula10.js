// Métodos de instância e Métodos estáticos

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

    // Método de instância:
    imprimir_dados(){
        console.log(`${this.marca} ${this.modelo}`);
    }

    // Método estático:
    static retornar_marca(){
        return 'Honda';
    }
}

//const fit = new Carro('Fit');

//fit.imprimir_dados();

console.log(Carro.retornar_marca());