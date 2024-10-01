// Inicializa o contador
let contador = 0;

// Captura os elementos
const contadorElement = document.getElementById('contador');
const botaoIncrementar = document.getElementById('botaoIncrementar');
const botaoDecrementar = document.getElementById('botaoDecrementar');

// Função para atualizar o valor do contador na tela
function atualizarContador() {
    contadorElement.textContent = contador;
}

// Adiciona evento ao botão para incrementar
botaoIncrementar.addEventListener('click', function() {
    contador++; // Incrementa o contador
    atualizarContador(); // Atualiza a exibição
});

// Adiciona evento ao botão para decrementar
botaoDecrementar.addEventListener('click', function() {
    contador--; // Decrementa o contador
    atualizarContador(); // Atualiza a exibição
});