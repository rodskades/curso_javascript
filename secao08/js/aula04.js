//Buscando elementos por ID:
//let itexto = document.getElementById('produto');

//console.log(itexto);

// Buscando elementos por Tag:
let spans = document.getElementsByTagName('span');

//console.log(spans);
//console.log(spans[0].textContent);
//console.log(spans[1].innerHTML);

//alterar estes valores:
//spans[0].textContent = 'JavaScript';
//spans[1].innerHTML = 'Geek University';

// Buscando elementos por Class:
//let eles = document.getElementsByClassName('texto');

//console.log(eles);

// Tomar elemento individual do collection:
//let span = document.getElementsByTagName('span')[0];

//console.log(span.innerHTML);
//span.style.textTransform = 'uppercase';

// Trabalhando novamente com query selector:
//let inp = document.querySelector('body div.container div.row input');  //busca primeiro elemento
//console.log(inp);

//let eles = document.querySelectorAll('.texto');  //busca todos os elementos
//console.log(eles)

//let div1 = document.querySelector('#div1');  //busca pelo ID
//console.log(div1);

//let imp = document.querySelector('input[name=produto]');
//console.log(imp);


// É possível definir eventos diretamente no .js:
// Exemplo 1:
// let btn = document.querySelector('button.btn');

// btn.onclick = function(){
//     alert('Botão clicado...');
// }

// Exemplo 2:
let btn = document.querySelector('button.btn');

let inp = document.querySelector('input[name=produto]');

btn.onclick = function(){
    alert(`Temos o texto ${inp.value}`);
}
