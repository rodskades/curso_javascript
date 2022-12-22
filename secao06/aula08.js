// Aprendendo sobre Funções Construtoras

// Criando uma função construtora:
function Pessoa(n, s, raca = 'Humano'){
    // Atributos privados só conseguimos fazer uso dentro da função construtora:
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    // Atributo público pode ser acessado fora da função construtora:
    this.raca = raca;

    // Método privado só conseguimos fazer udo dentro da função construtora:
    let imprimir_dados = function(){
        console.log(`Nome: ${nome}, Idade: ${idade}, Peso: ${peso}, Altura: ${altura}, Sexo: ${sexo}, Raça: ${raca}`);
    }

    // Método público conseguimos acessar fora da função construtora:
    this.fazer_aniversario = function(){
        idade += 1;
        imprimir_dados();
    }

    this.getIdade = function(){
        return idade;
    }
}

const angelina = new Pessoa('Angelina', 'Feminino');

console.log(angelina);

console.log(angelina.peso);  // Retorna undefined pois é atributo privado

console.log(angelina.raca);  // Retorna o valor correto pois é atributo público

angelina.fazer_aniversario();  // Método público.

// Instanciando um novo objeto:
const felicity = new Pessoa("Felicity", "Feminino");

felicity.fazer_aniversario();
console.log(felicity.getIdade());

// Se checarmos os tipos:
console.log(typeof(Pessoa));  // Function
console.log(typeof(angelina));  // Object

