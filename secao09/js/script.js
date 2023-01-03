// 1) Temos que referenciar o input
let input = document.querySelector('input[name=tarefa]');

// 2) Temos que referenciar o button
let btn = document.querySelector('#botao');

// 3) Temos que referenciar a lista
let lista = document.querySelector('#lista');

// Criando uma lista com exemplos:
let tarefas = [
   'Jogar videogame',
   'Estudar Python',
   'Estudar JavaScript',
   'Ver um filme',
   'Ler um livro' 
];

/*
A ideia é criar itens assim:

<li class="list-group-item list-group-item-action">Jogar video game</li>
<li class="list-group-item list-group-item-action">Estudar Python</li>
<li class="list-group-item list-group-item-action">Estudar JavaScript</li>
<li class="list-group-item list-group-item-action">Ver um filme</li>
<li class="list-group-item list-group-item-action">Ler um livro</li>
*/

function renderizarTarefas(){
    for(tarefa of tarefas){
        // Criar o item da lista:
        let itemLista = document.createElement('li');

        // Adicionar classe no item:
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        // Criar um texto:
        let itemTexto = document.createTextNode(tarefa);

        // Adicionar texto no item:
        itemLista.appendChild(itemTexto);

        // Adicionar o item na lista:
        lista.appendChild(itemLista);
    }
}

// Executando a função de renderizar as tarefas:
renderizarTarefas();