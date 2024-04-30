//Formulário
function validarFormulario(){
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('message').value;

    if(nome == '' || telefone == '' || email =='' || mensagem ==''){
        alert('Por favor, preencha todos os campos');
        return false;
    }
    else{
        alert('Mensagem enviada com sucesso! Em breve, entraremos em contato!');
        return true;
    }


}

// Verificação Idade

function liberarsite() {
    window.location.href = "pagliberada.html"
}

function redirect() {
    window.location.href = "https://google.com"
}
function logar(){
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;

    if (login == 'admin' && senha =='admin'){
        alert("Login efetuado com sucesso!");
    }
    else{
        alert('Usuário ou senha incorretos. Tente novamente');
    }
}