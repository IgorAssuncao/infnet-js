app.inicio = function() {};

(function() {
  var imagens = [
    "img/facebook.png",
    "img/android.png",
    "img/chrome.png",
    "img/firefox.png",
    "img/html5.png",
    "img/googleplus.png",
    "img/twitter.png",
    "img/windows.png",
    "img/cross.png"
  ];

  const body = document.body;
  const button = document.createElement("button");
  const tabuleiro = document.createElement("div");

  app.cards = [];

  app.gameStarted = false;

  button.setAttribute("class", "button");
  button.setAttribute("id", "button");
  button.innerHTML = "Iniciar jogo";
  body.appendChild(button);

  tabuleiro.setAttribute("id", "tabuleiro");

  body.appendChild(tabuleiro);

  button.onclick = () => app.inicio();
})();

function startGame() {
  imagens.forEach(img => {
    if (img !== "img/cross.png") cards.push(img);
  });

  cards = sortCards(cards).concat(sortCards(cards));

  cards.forEach(card => {
    tabuleiro.appendChild(mountCardHtml(card));
  });
}

function restartGame() {}

function sortCards(cards) {
  cards.sort(() => {
    return 0.3 - Math.random();
  });

  return cards;
}

function mountCardHtml(card) {
  const divCard = document.createElement("div");
  divCard.setAttribute("class", "divCard");

  const cardFront = document.createElement("img");
  cardFront.setAttribute("class", "cardFront");
  cardFront.setAttribute("src", `${card}`);

  divCard.appendChild(cardFront);

  const cardBack = document.createElement("img");
  cardBack.setAttribute("class", "cardBack");
  cardBack.setAttribute("src", "img/cross.png");

  divCard.appendChild(cardBack);

  console.log(divCard);
  return divCard;
}

app.inicio();
