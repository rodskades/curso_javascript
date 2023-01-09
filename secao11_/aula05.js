// OBJECT SHORT SINTAX
const nome = 'Programação em JavaScript';
const preco = 'R$ 27,99';
const horas = 25;

const curso = {
    nome,  // Como o atributo tem o mesmo nome da variável global, não é necessário colocar os dois pontos
    preco,
    instrutor: 'Geek University',  // Como não existe essa variável global anteriormente, faz-se da forma comum
    carga_horaria: horas,  // Como o atributo tem nome diferente da variável global, faz-se da forma comum também.
};

console.log(curso);
