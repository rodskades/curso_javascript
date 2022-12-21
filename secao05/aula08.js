// Aprendendo template strings

const idade = 19;
const nome = 'Geek';

//console.log(nome + ' tem ' + idade + ' anos. ');

// Template strings:
function soma_1(idade){
    return idade + 1;
}

console.log(`${nome} tem ${soma_1(idade)} anos.`);

/*
Em template strings se usa a crase, não as aspas simples ou acento agudo!
*/