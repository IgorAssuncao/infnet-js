app.inicio = function() {
  const buttonStart = document.getElementById("buttonStart");
  // buttonStart.onclick = () => startGame();

  app.firstTime
    ? initializeBoard()
    : !app.gameStarted
    ? (buttonStart.onclick = () => startGame())
    : (buttonStart.onclick = () => stopGame());
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
  const buttonStart = document.createElement("button");
  const tabuleiro = document.createElement("div");

  app.cards = [];

  app.firstTime = true;
  app.gameStarted = false;

  buttonStart.setAttribute("class", "button");
  buttonStart.setAttribute("id", "buttonStart");
  buttonStart.innerHTML = "Iniciar jogo";
  body.appendChild(buttonStart);

  tabuleiro.setAttribute("id", "tabuleiro");

  body.appendChild(tabuleiro);
})();

// function createStopButton() {
//   if (!document.getElementById("buttonRestart")) {
//     const body = document.body;
//     const buttonRestart = document.createElement("button");

//     buttonRestart.setAttribute("class", "button");
//     buttonRestart.setAttribute("id", "buttonRestart");

//     buttonRestart.innerHTML = "Reinciar";

//     body.appendChild(buttonRestart);
//   }
// }

function checkClickOnCard(event) {
  return event.target.parentNode.id.split('/')[0] === 'img';
}

function flipCard(event) {
  const target = event.target.parentNode;

  if (checkClickOnCard(event)) {
    target.childNodes[0].style.display = "block";
    target.childNodes[1].style.display = "none";
  }
}

function unflipCard() {

}

function flipAllCards() {
  const tabuleiro = document.getElementById("tabuleiro");

  for (element of tabuleiro.getElementsByClassName("cardBack")) {
    element.style.display = "none";
  }
  for (element of tabuleiro.getElementsByClassName("cardFront")) {
    element.style.display = "block";
  }
}

function unflipAllCards() {
  const tabuleiro = document.getElementById("tabuleiro");

  for (element of tabuleiro.getElementsByClassName("cardFront")) {
    element.style.display = "none";
  }
  for (element of tabuleiro.getElementsByClassName("cardBack")) {
    element.style.display = "block";
  }
}

function checkCardsMatch(card, otherCard) {
  return card === otherCard;
}

function initializeBoard() {
  const body = document.body;
  const tabuleiro = document.getElementById("tabuleiro");

  if (app.cards.length <= 0) {
    app.imagens.forEach(img => {
      if (img !== "img/cross.png") app.cards.push(img);
    });

    app.cards = sortCards(app.cards).concat(sortCards(app.cards));
  }

  app.cards.forEach(card => {
    tabuleiro.appendChild(mountCardHtml(card));
  });

  unflipAllCards();

  body.appendChild(tabuleiro);

  app.firstTime = false;
  app.inicio();
}

function startGame() {
  app.gameStarted = true;

  const button = document.getElementById("buttonStart");
  button.innerHTML = "Parar jogo";

  const cardsMatched = [];
  const cardsPair = [];
  
  const allDivCards = document.getElementsByClassName("divCard");
  
  for (divCard of allDivCards) {
    divCard.onclick = flipCard;
  }

  flipAllCards();

  setTimeout(() => { 
    if (app.gameStarted) unflipAllCards();
  }, 3000);
  
  // createStopButton();

  if (app.gameStarted) {
    console.log(checkClickOnCard(event))
    if (checkClickOnCard(event)) {
      console.log('entrou aqui oh')
      cardsPair.push(event.target);
      console.log(cardsPair);
      if (cardsPair.length == 2) checkCardsMatch(cardsPair[0], cardsPair[1]);

      app.gameStarted = !checkAllCardsMatch();
    }
    // break;
  }
}

function stopGame() {
  cleanUp();
  initializeBoard();
  app.gameStarted = false;
}

function restartGame() {
  stopGame();
  startGame();
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
  divCard.setAttribute("id", `${card}`);

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
  const button = document.getElementById("buttonStart");

  document.getElementById("tabuleiro").innerHTML = '';

  button.innerHTML = "Iniciar jogo";
}

app.inicio();
