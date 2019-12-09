app.inicio = function() {
  app.firstTime
    ? initializeBoard()
    : !app.gameStarted
    ? startGame()
    : restartGame();
};

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

  app.imagens = imagens;

  const body = document.body;
  const button = document.createElement("button");
  const tabuleiro = document.createElement("div");

  app.cards = [];

  app.firstTime = true;
  app.gameStarted = false;

  button.setAttribute("class", "button");
  button.setAttribute("id", "button");
  button.innerHTML = "Iniciar jogo";
  body.appendChild(button);

  tabuleiro.setAttribute("id", "tabuleiro");

  button.onclick = () => app.inicio();

  body.appendChild(tabuleiro);
})();

function initializeBoard() {
  const body = document.body;
  const tabuleiro = document.getElementById("tabuleiro");

  app.imagens.forEach(img => {
    if (img !== "img/cross.png") app.cards.push(img);
  });

  app.cards = sortCards(app.cards).concat(sortCards(app.cards));

  app.cards.forEach(card => {
    tabuleiro.appendChild(mountCardHtml(card));
  });

  for (element of tabuleiro.getElementsByClassName("cardFront")) {
    element.style.display = "none";
  }

  body.appendChild(tabuleiro);

  app.firstTime = false;
}

function startGame() {
  app.gameStarted = true;
  const body = document.body;
  const button = document.getElementById("button");
  const tabuleiro = document.getElementById("tabuleiro");

  for (element of tabuleiro.getElementsByClassName("cardBack")) {
    element.style.display = "none";
  }
  for (element of tabuleiro.getElementsByClassName("cardFront")) {
    element.style.display = "block";
  }

  setTimeout(() => {}, 3000);

  button.innerHTML = "Reiniciar jogo";
}

function restartGame() {
  cleanUp();
  console.log(document.getElementById("tabuleiro"));
  initializeBoard();
  app.gameStarted = false;
}

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

  return divCard;
}

function cleanUp() {
  const body = document.body;
  const button = document.getElementById("button");

  body.removeChild(document.getElementById("tabuleiro"));

  const tabuleiro = document.createElement("div");
  tabuleiro.setAttribute("id", "tabuleiro");
  console.log(tabuleiro);

  button.innerHTML = "Iniciar jogo";
  body.appendChild(tabuleiro);
}

app.inicio();
