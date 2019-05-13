/*document.querySelector('.minha-div').onclick = function() {
    alert('Opa! Alguém clicou em mim');
}*/

document.querySelector('.form-login').addEventListener('submit', validaFormulario);

function validaFormulario(evento) {
    evento.preventDefault();
    let email = document.querySelector('.email').value;
    let senha = document.querySelector('.senha').value;

if (email == '' || senha == '') {
    document.querySelector('.mensagem').innerHTML = 'você não preencheu o email e/ou a senha';
    document.querySelector('.mensagem').classList.add('erro');
} else {
    document.querySelector('.mensagem').innerHTML = 'formulário válido';
    document.querySelector('.mensagem').classList.add('sucesso');

}

}


