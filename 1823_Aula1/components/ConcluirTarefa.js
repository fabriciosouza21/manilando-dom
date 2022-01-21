const BotaoCompletar = ()=>{
    const botao = document.createElement("button");
    botao.classList.add("check-button");
    botao.innerText = "Completar";
    botao.addEventListener('click', concluirTarefa)
    return botao;
}

const concluirTarefa = (evento)=>{
   const botao = evento.target;
   const div = botao.parentElement;
   const tarefa = div.parentElement;
   tarefa.classList.toggle("done");
}

export default BotaoCompletar;