// Captura a barra de progresso e o botão
const barraProgresso = document.getElementById('barraProgresso');
const botaoProgresso = document.getElementById('botaoProgresso');

let progresso = 0; // Variável que armazena o estado da barra de progresso

// Função que atualiza a barra de progresso
botaoProgresso.addEventListener('click', function() {
    if (progresso < 100) { // Limita o progresso a 100%
        progresso += 10; // Incrementa o progresso em 10%
        barraProgresso.style.width = progresso + '%'; // Atualiza a largura da barra
        barraProgresso.textContent = progresso + '%'; // Atualiza o texto dentro da barra
    }
});