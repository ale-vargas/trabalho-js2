// Captura o seletor de tema e o corpo da página
const seletorTema = document.getElementById('seletorTema');
const pagina = document.getElementById('pagina');

// Função para aplicar o tema claro
function aplicarTemaClaro() {
    pagina.style.backgroundColor = '#ffffff'; // Cor de fundo branca
    pagina.style.color = '#000000'; // Cor do texto preta
}

// Função para aplicar o tema escuro
function aplicarTemaEscuro() {
    pagina.style.backgroundColor = '#333333'; // Cor de fundo escura
    pagina.style.color = '#ffffff'; // Cor do texto branca
}

// Evento de mudança no seletor de tema
seletorTema.addEventListener('change', function() {
    const temaSelecionado = seletorTema.value;

    if (temaSelecionado === 'claro') {
        aplicarTemaClaro();
    } else if (temaSelecionado === 'escuro') {
        aplicarTemaEscuro();
    }
});

// Define o tema inicial como claro
aplicarTemaClaro();