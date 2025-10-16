function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    
    alert(nomeJogo.textContent);
}

/*function alterarStatus(id) {
    let game = document.getElementById(`game-${id}`);
    let imagem = game.querySelector(".dashboard__item__img")
    let botão = game.querySelector(".dashboard__item__button")
    let nome = game.querySelector(".dashboard__item__button")

    alert(nome.textContent);

}
*/