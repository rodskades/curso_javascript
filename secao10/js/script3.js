// Axios

let btn = document.querySelector('#btn');
let div = document.querySelector('#app');

btn.onclick = function(){
    // Limpa a div:
    div.innerHTML = '';

    // Criar o span:
    let spanNome = document.createElement('span');

    // Criar o txtNome:
    let txtNome = '';

    // Recuperar o input:
    let github_user = document.querySelector('input[name=github_user]');

    axios.get(`https://api.github.com/users/${github_user.value}`)
        .then(function(response){
            if(response.data.name !== null){
                txtNome = document.createTextNode(response.data.name);

                let img = document.createElement('img');
                img.setAttribute('src', response.data.avatar_url);
                img.setAttribute('alt', response.data.name);
                img.setAttribute('width', '50px');
                img.setAttribute('height', '50px');

                div.appendChild(img);
            }else{
                txtNome = document.createTextNode('O usuário não possui nome.');
            }
            // Adiciona o conteúdo na Div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);

            // Limpando o input:
            github_user.value = '';
        })
        .catch(function(error){
            txtNome = document.createTextNode('Não foi possível realizar a requisição.');
            // Adiciona o conteúdo na Div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        });
}