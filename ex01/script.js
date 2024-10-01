// Captura o botão e a lista de tarefas
const botaoAdicionar = document.getElementById('adicionarBtn');
const listaTarefas = document.getElementById('listaTarefas');

// Função para adicionar tarefa
botaoAdicionar.addEventListener('click', function() {
    const tarefaInput = document.getElementById('tarefaInput');
    const tarefaTexto = tarefaInput.value.trim();

    // Verifica se o campo não está vazio
    if (tarefaTexto !== '') {
        // Cria um novo item de lista
        const novoItem = document.createElement('li');
        novoItem.textContent = tarefaTexto;

        // Adiciona o item à lista
        listaTarefas.appendChild(novoItem);

        // Limpa o campo de entrada
        tarefaInput.value = '';
    } else {
        alert('Por favor, digite uma tarefa.');
    }
});