// Função para adicionar o efeito de zoom na imagem
function adicionarZoom(imagem) {
    imagem.classList.add('zoom');
}

// Função para remover o efeito de zoom da imagem
function removerZoom(imagem) {
    imagem.classList.remove('zoom');
}

// Seleciona todas as imagens da galeria
const imagens = document.querySelectorAll('.galeria img');

// Adiciona os eventos de mouseover e mouseout para cada imagem
imagens.forEach(imagem => {
    imagem.addEventListener('mouseover', function() {
        adicionarZoom(imagem);
    });

    imagem.addEventListener('mouseout', function() {
        removerZoom(imagem);
    });
});