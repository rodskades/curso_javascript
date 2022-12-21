// Tratamentos de erros com try catch

/*
console.log(nome);  // Isso gera um ReferenceError, pois não há a variável declarada.

console.log("Oi!");  // Esta linha nunca será gerada, pois o erro para o programa.
*/

// Para tratar isto, utilizamos o try catch:
try{
    console.log(nome);
}catch(e){
    console.log('Não foi possível imprimir nome.')
    console.log(e.name);
}

console.log("Oi!");  // Desta vez, esta linha será gerada mesmo com o erro acontecendo.

// "Forçando" erros a acontecer:
function dividir(num1, num2){
    if(num1 === 0 || num2 === 0){
        throw("Os valores devem ser positivos.")  // Isto lança uma exceção (erro)
    }else{
        return num1/num2;
    }
}

// Também existe outra estrutura a mais no try catch que é o finally:
try{
    let ret = dividir(0, 2);
    console.log(ret);
}catch(e){
    console.log('Não foi possível dividir.');
}finally{
    console.log("Vamos continuar...");
}
