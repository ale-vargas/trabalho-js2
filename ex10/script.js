 // Captura os elementos HTML necessários
 const numero1 = document.getElementById('numero1');
 const numero2 = document.getElementById('numero2');
 const resultadoDiv = document.getElementById('resultado');

 // Função para exibir o resultado
 function exibirResultado(resultado) {
     resultadoDiv.textContent = 'Resultado: ' + resultado;
 }

 // Funções para as operações matemáticas
 function adicionar() {
     const n1 = parseFloat(numero1.value);
     const n2 = parseFloat(numero2.value);
     exibirResultado(n1 + n2);
 }

 function subtrair() {
     const n1 = parseFloat(numero1.value);
     const n2 = parseFloat(numero2.value);
     exibirResultado(n1 - n2);
 }

 function multiplicar() {
     const n1 = parseFloat(numero1.value);
     const n2 = parseFloat(numero2.value);
     exibirResultado(n1 * n2);
 }

 function dividir() {
     const n1 = parseFloat(numero1.value);
     const n2 = parseFloat(numero2.value);
     if (n2 !== 0) {
         exibirResultado(n1 / n2);
     } else {
         exibirResultado('Erro: Divisão por zero');
     }
 }

 // Adiciona eventos aos botões
 document.getElementById('adicionar').addEventListener('click', adicionar);
 document.getElementById('subtrair').addEventListener('click', subtrair);
 document.getElementById('multiplicar').addEventListener('click', multiplicar);
 document.getElementById('dividir').addEventListener('click', dividir);