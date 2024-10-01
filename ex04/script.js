 // Captura o campo de pesquisa e a lista de nomes
 const campoPesquisa = document.getElementById('campoPesquisa');
 const listaNomes = document.getElementById('listaNomes');
 const itensNomes = listaNomes.getElementsByTagName('li');

 // Função para filtrar os nomes
 campoPesquisa.addEventListener('input', function() {
     const textoBusca = campoPesquisa.value.toLowerCase(); // Obtém o valor do campo de pesquisa e converte para minúsculas

     // Itera sobre cada item da lista de nomes
     for (let i = 0; i < itensNomes.length; i++) {
         const nome = itensNomes[i].textContent.toLowerCase(); // Obtém o texto do nome e converte para minúsculas
         
         // Verifica se o nome contém o texto buscado
         if (nome.includes(textoBusca)) {
             itensNomes[i].style.display = ''; // Mostra o item se contiver o texto
         } else {
             itensNomes[i].style.display = 'none'; // Esconde o item se não contiver o texto
         }
     }
 });