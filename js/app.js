contabilizarjOGOS ();

function alterarStatus(id) {
    let game = document.getElementById(`game-${id}`);
    let imagem = game.querySelector(".dashboard__item__img");
    let botão = game.querySelector(".dashboard__item__button");
    let nome = game.querySelector('.dashboard__item__name');

     // função de mudança do botão

    if (botão.classList.contains("dashboard__item__button--return")) {
       let confirmação = confirm(`Você está prestes a devolver o jogo:"${nome}", gostaria de prosseguir?`);
        if (confirmação == true) {
            botão.classList.remove("dashboard__item__button--return");
            botão.innerHTML = "Alugar";
            contabilizarjOGOS ();
        } else {return};
    } else {
        botão.classList.add("dashboard__item__button--return");
        botão.innerHTML = "Devolver";
        contabilizarjOGOS ();
    };

    // Função de mudança da imagem

    if (imagem.classList.contains("dashboard__item__img--rented")) {
        imagem.classList.remove("dashboard__item__img--rented");
    } else {
        imagem.classList.add("dashboard__item__img--rented");
    };
};
 
function contabilizarjOGOS () {
    let quantidade = document.querySelectorAll('.dashboard__item__button--return')
    console.log(`existem atualmente ${quantidade.length} jogos alugados`)
}
