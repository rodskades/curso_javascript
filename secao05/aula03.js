// Lidando com forEach

var cursos = [
    'Programação para Leigos',
    'Algoritmos e Lógica de Programação',
    'Programação em C',
    'Programação em java',
    'Programação em Python',
    'Banco de Dados',
    'Programação Web com Django Framework',
    'Programação em JavaScript',
];

//console.log(cursos);
//console.log(cursos.length);

// Definir uma função:
function imprimir(curso, indice){
    console.log(indice + ' - ' + curso);
}

// Aplicando o forEach:
//cursos.forEach(imprimir);

// Utilização de uma função anônima (lambda/callback) e template string:
cursos.forEach(function(curso, indice){
    //console.log(`${indice} - ${curso}`);
});

// É a mesma coisa que fazer um loop desta forma:
for(var i = 0; i < cursos.length; i++){
    console.log(i + ' - ' + cursos[i]);
}