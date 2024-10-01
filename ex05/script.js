 // Captura os parágrafos e o botão
 const toggleBtn = document.getElementById('toggleBtn');
 const paragrafo1 = document.getElementById('paragrafo1');
 const paragrafo2 = document.getElementById('paragrafo2');
 const paragrafo3 = document.getElementById('paragrafo3');

 let paragrafoVisivel = true; // Variável para rastrear o estado atual

 // Função para alternar a visibilidade dos parágrafos
 toggleBtn.addEventListener('click', function() {
     if (paragrafoVisivel) {
         // Esconde os parágrafos
         paragrafo1.style.display = 'none';
         paragrafo2.style.display = 'none';
         paragrafo3.style.display = 'none';
         toggleBtn.textContent = 'Mostrar Parágrafos'; // Altera o texto do botão
     } else {
         // Mostra os parágrafos
         paragrafo1.style.display = 'block';
         paragrafo2.style.display = 'block';
         paragrafo3.style.display = 'block';
         toggleBtn.textContent = 'Esconder Parágrafos'; // Altera o texto do botão
     }

     // Alterna o estado de visibilidade
     paragrafoVisivel = !paragrafoVisivel;
 });