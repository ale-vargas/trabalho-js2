// Captura o parágrafo e os botões
const paragrafo = document.getElementById('meuParagrafo');
const botaoVermelho = document.getElementById('botaoVermelho');
const botaoItalico = document.getElementById('botaoItalico');

// Adiciona evento ao botão para mudar a cor do texto
botaoVermelho.addEventListener('click', function() {
    paragrafo.style.color = 'red'; // Muda a cor do texto para vermelho
});

// Adiciona evento ao botão para mudar o estilo da fonte
botaoItalico.addEventListener('click', function() {
    paragrafo.style.fontStyle = 'italic'; // Muda o estilo da fonte para itálico
});