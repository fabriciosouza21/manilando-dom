
const BotaoFinalizar = ()=>{
    const botao = document.createElement("button");
    botao.classList.add("check-button");
    botao.innerText = "Finalizar"
    botao.addEventListener("click", finalizarTarefa)
    return botao;
}

const finalizarTarefa = (evento)=>{
    const botao = evento.target;
    const lista = botao.parentElement;
    lista.remove();
}

export default BotaoFinalizar;