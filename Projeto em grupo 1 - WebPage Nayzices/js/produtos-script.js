

function popup(){
    var botoes = Array.from(document.querySelectorAll(".botao-popup"))

    document.querySelector(".popup").classList.toggle("d-none") // toggle: se o elemento tiver a classe, ele tira ela. Se o elemento não tiver a classe, ele coloca ela
    document.querySelector("body").classList.toggle("o-hidden")

    var indice = botoes.indexOf(event.target) // index: posição dentro do array; indexof: metodo para achar a posição de um elemento. O index começa no 0.
    indice = indice + 2;
    var popupSelecionado = document.querySelector(".quadro .conteudo-popup:nth-child(" + indice + ")") // o nth-child começa a contar no 1
    popupSelecionado.classList.toggle("d-none")
}

function popupFechar(){
    document.querySelector(".popup").classList.toggle("d-none")
    document.querySelector("body").classList.toggle("o-hidden")

    var todosOsPopups = Array.from(document.querySelectorAll(".quadro .conteudo-popup"))
    
    for (i of todosOsPopups){
        i.classList.add("d-none")
    }
}