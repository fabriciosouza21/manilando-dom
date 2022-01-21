
const BotaoFinalizar = ()=>{
    const botao = document.createElement("button");
    botao.classList.add("check-button");
    botao.innerText = "Finalizar"
    botao.addEventListener("click", finalizarTarefa)
    return botao;
}

const finalizarTarefa = (evento)=>{
    const botao = evento.target;
    const div = botao.parentElement;
    const tarefa = div.parentElement;
    tarefa.remove();
}

export default BotaoFinalizar;