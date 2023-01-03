// 1) Temos que referenciar o input
let input = document.querySelector('input[name=tarefa]');

// 2) Temos que referenciar o button
let btn = document.querySelector('#botao');

// 3) Temos que referenciar a lista
let lista = document.querySelector('#lista');

// Referenciando o card também:
let card = document.querySelector('.card');

// Criando uma lista:
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

/*
A ideia é criar itens assim:

<li class="list-group-item list-group-item-action">Jogar video game</li>
<li class="list-group-item list-group-item-action">Estudar Python</li>
<li class="list-group-item list-group-item-action">Estudar JavaScript</li>
<li class="list-group-item list-group-item-action">Ver um filme</li>
<li class="list-group-item list-group-item-action">Ler um livro</li>
*/

function renderizarTarefas(){
    // Limpando a listagem de itens antes de renderizar novamente a tela:
    lista.innerHTML = '';

    for(tarefa of tarefas){
        // Criar o item da lista:
        let itemLista = document.createElement('li');

        // Adicionar classe no item:
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        // Adicionar evento de clique no item da lista:
        itemLista.onclick = function(){
            deletarTarefa(this);
        }

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

// 1) Precisamos "escutar" o evento de click no botão:
btn.onclick = function(){
    // 2) Precisamos capturar o valor digitado pelo usuário no input:
    if(input.value !== ''){
        let novaTarefa = input.value;

        // 3) Precisamos atualizar a nova tarefa na lista (array) de tarefas e renderizar a tela novamente:
        tarefas.push(novaTarefa);
        renderizarTarefas();

        // Limpar mensagens de erro (spans)
        removerSpans();

        // Salva os novos dados no banco de dados:
        salvarDadosNoStorage();
    }else{
        // Limpar mensagens de erro (spans)
        removerSpans();

        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-warning');

        let msg = document.createTextNode('Você precisa informar a tarefa!');

        span.appendChild(msg);

        card.appendChild(span);
    }

    // Limpando o input:
    input.value = '';

}

function removerSpans(){
    let spans = document.querySelectorAll('span');

    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    }
}

// Função para deletar itens da lista
function deletarTarefa(tar){
    // Remove a tarefa do array:
    tarefas.splice(tarefas.indexOf(tar.textContent), 1);

    // Renderiza novamente a tela:
    renderizarTarefas();
    removerSpans();

    // Salva os novos dados no banco de dados:
    salvarDadosNoStorage();
}

// Salvando dados no local storage
function salvarDadosNoStorage(){
    // Todo navegador web possui esta capacidade.
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}
