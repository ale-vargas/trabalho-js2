// Captura o formulário e a área de exibição de erros
const formulario = document.getElementById('formularioContato');
const mensagemErro = document.getElementById('mensagemErro');

// Função para validar o formulário
formulario.addEventListener('submit', function(event) {
    // Impede o envio padrão do formulário
    event.preventDefault();

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Verifica se todos os campos estão preenchidos
    if (nome === '' || email === '' || mensagem === '') {
        mensagemErro.textContent = 'Por favor, preencha todos os campos.';
    } else {
        mensagemErro.textContent = ''; // Limpa a mensagem de erro
        alert('Formulário enviado com sucesso!');
        // Aqui você pode adicionar lógica para processar o formulário
        // Por exemplo, enviar os dados para um servidor
        formulario.reset(); // Limpa o formulário após envio
    }
});