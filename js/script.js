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

function calcular(){
    let tinto = parseInt(document.getElementById('tinto').value);
    let branco = parseInt(document.getElementById('branco').value);
    let rose = parseInt(document.getElementById('rose').value);
    if(document.getElementById('sim').checked == true){
        document.getElementById('total').innerText = (tinto*15 + branco*20 + rose*30) - (tinto*15 + branco*20 + rose*30)*0.1;
        alert(`Cupom FIAP2024 aplicado! Valor final com desconto de R$ ${(tinto*15 + branco*20 + rose*30) - (tinto*15 + branco*20 + rose*30)*0.1}.`);
    }
    else{
        alert(`Cupom NÃO APLICADO! Valor final sem desconto de R$ ${tinto*15 + branco*20 + rose*30}`);
        document.getElementById('total').innerText = tinto*15 + branco*20 + rose*30;
    }
    
    
}
function soma(){
    let tinto = parseInt(document.getElementById('tinto').value);
    let branco = parseInt(document.getElementById('branco').value);
    let rose = parseInt(document.getElementById('rose').value);
    document.getElementById('quantidade').innerText = tinto + branco + rose;
    alert(`Você adicionou um total de ${tinto+branco+rose} vinhos ao seu carrinho.`) 
}

function getOption(){
    selectElement = document.querySelector('#select1');
    output = selectElement.value;
    document.querySelector('.output').textContent = output; 

    if(output == 'Vinho Tinto'){
        document.querySelector('.harm_tinto').textContent = 'a) Carnes vermelhas grelhadas ou assadas, como file migon e costelas - b) Frango assado ou cozido - c) Pizza - d) Bacalhau - d) Risotos simples, como o funghi e o de queijo.';
        document.querySelector('.harm_rose').textContent = ' ';
        document.querySelector('.harm_branco').textContent = ' ';
    }else if(output == 'Vinho Branco'){
        document.querySelector('.harm_branco').textContent = 'a) Queijos brancos como brie e camembert - b) Queijos amarelos - c) peixe, frango e carne de porco';
        document.querySelector('.harm_tinto').textContent = ' ';
        document.querySelector('.harm_rose').textContent = ' ';
        
    }else{
        document.querySelector('.harm_rose').textContent = 'a) Aves grelhadas com saladas ou, até mesmo, um strogonoff de frango - b) Carnes vermelhas bem temperadas.';
        document.querySelector('.harm_tinto').textContent = ' ';
        document.querySelector('.harm_branco').textContent = ' ';
    }
}