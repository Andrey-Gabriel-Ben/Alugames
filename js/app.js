function alterarStatus(id) {
    let game = document.getElementById(`game-${id}`);
    let imagem = game.querySelector(".dashboard__item__img")
    let botão = game.querySelector(".dashboard__item__button")
    
    // função de mudança do botão

    if (botão.classList.contains("dashboard__item__button--return")) {
        botão.classList.remove("dashboard__item__button--return")
        botão.innerHTML = "Alugar"
    } else {
        botão.classList.add("dashboard__item__button--return")
        botão.innerHTML = "Devolver"
    }



}

