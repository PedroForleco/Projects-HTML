function adicionarTarefa() {
    let input = document.getElementById("tarefaInput");
    let tarefa = input.value.trim();
    
    if (tarefa !== "") {
        let lista = document.getElementById("listaTarefas");

        let item = document.createElement("li");
        item.innerHTML = `${tarefa} <button onclick="removerTarefa(this)">X</button>`;
        
        lista.appendChild(item);
        input.value = "";
    } else {
        alert("Por favor, digite uma tarefa!");
    }
}

function removerTarefa(botao) {
    let item = botao.parentElement;
    item.remove();
}
