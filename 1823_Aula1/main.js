import BotaoCompletar from "./components/ConcluirTarefa.js";
import BotaoFinalizar from "./components/FinalizarTarefa.js";

const criarTarefa = (evento)=>{
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const lista = document.querySelector("[data-lista]");
    const value = input.value;


    const tarefa =  document.createElement("li");
    tarefa.classList.add("task");


    const conteudo = `<p class="content">  ${value}</p>`;
    tarefa.innerHTML = conteudo;

    const botoes = document.createElement("div");
    botoes.classList.add("buttons");
    botoes.appendChild(BotaoCompletar());
    botoes.appendChild(BotaoFinalizar());
    tarefa.appendChild(botoes);

    lista.appendChild(tarefa);
    
    input.value = " "
    
}

const button = document.querySelector("[data-form-button]");
button.addEventListener('click', criarTarefa);