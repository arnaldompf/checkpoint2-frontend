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