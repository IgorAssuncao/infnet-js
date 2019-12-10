app.inicio = function() {
  app.firstTime
    ? initializeBoard()
    : app.gameStarted
    ? stopGame()
    : startGame();
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
  app.moves = 0;
  app.points = 0;

  const body = document.body;
  const buttonStart = document.createElement("button");
  const tabuleiro = document.createElement("div");

  app.cards = [];

  app.firstTime = true;
  app.gameStarted = false;

  buttonStart.setAttribute("class", "button");
  buttonStart.setAttribute("id", "buttonStart");
  buttonStart.innerHTML = "Iniciar jogo";
  buttonStart.onclick = app.inicio;
  body.appendChild(buttonStart);

  const moves = document.createElement("p");
  moves.setAttribute("id", "moves");
  moves.innerHTML = `Movimentos: ${app.moves} - Pontos: ${app.points}`;

  body.appendChild(moves);

  const mensagem = document.createElement("h2");
  mensagem.setAttribute("id", "mensagem");
  mensagem.style.display = "none";

  body.appendChild(mensagem);

  const timer = document.createElement("p");
  timer.setAttribute("id", "timer");

  body.appendChild(timer);

  tabuleiro.setAttribute("id", "tabuleiro");

  body.appendChild(tabuleiro);

  localStorage.setItem("ranking", JSON.stringify({}));

  const ranking = document.createElement("p");
  ranking.setAttribute("id", "ranking");
  ranking.style.display = "none";

  body.appendChild(ranking);
})();

function initializeBoard() {
  app.moves = 0;
  app.points = 0;
  app.cardsOpen = [];
  app.cardsMatched = [];
  app.timer = 0;

  const body = document.body;

  const tabuleiro = document.getElementById("tabuleiro");

  const mensagem = document.getElementById("mensagem");
  mensagem.style.display = "none";

  const timer = document.getElementById("timer");
  timer.innerHTML = `Tempo: ${app.timer} s`;

  body.appendChild(timer);

  if (app.cards.length <= 0) {
    app.imagens.forEach(img => {
      if (img !== "img/cross.png") app.cards.push(img);
    });

    app.cards = sortCards(app.cards.concat(app.cards));

    let index = 1;
    app.cards.forEach(card => {
      tabuleiro.appendChild(mountCardHtml(card, index));
      index++;
    });
  }

  unflipAllCards();

  body.appendChild(tabuleiro);

  app.firstTime = false;
}

function startGame() {
  app.gameStarted = true;

  const button = document.getElementById("buttonStart");
  button.innerHTML = "Parar jogo";
  button.onclick = app.inicio;

  const allDivCards = document
    .getElementById("tabuleiro")
    .getElementsByClassName("divCard");

  for (divCard of allDivCards) {
    divCard.onclick = cardOpen;
  }

  flipAllCards();

  setTimeout(() => {
    if (app.gameStarted) unflipAllCards();
    app.interval = setInterval(() => {
      if (app.points < 8) {
        app.timer++;
        updateTimer();
      }
    }, 1000);
  }, 3000);

  app.timer = 0;
}

function stopGame() {
  clearInterval(app.interval);
  app.interval = 0;
  
  cleanUp();
  initializeBoard();
  app.gameStarted = false;
  app.points = 0;
  app.moves = 0;
  app.cardsMatched = [];
  app.cardsOpen = [];
  app.timer = 0;

  updateScore();

  alert('O jogo parou');
}

function cleanUp() {
  const button = document.getElementById("buttonStart");
  button.innerHTML = "Iniciar jogo";

  document.getElementById("tabuleiro").innerHTML = "";

  const rankingParapgraph = document.getElementById("ranking");
  rankingParapgraph.innerHTML = "";
  rankingParapgraph.style.display = "none";

  app.cards = [];
}

function sortCards(cards) {
  let current = cards.length,
    randomIndex;

  while (current !== 0) {
    randomIndex = Math.floor(Math.random() * current);
    current--;

    [cards[current], cards[randomIndex]] = [cards[randomIndex], cards[current]];
  }

  return cards;
}

function cardOpen() {
  flipCard(this);
  app.cardsOpen.push(this);
  app.moves++;
  updateScore();

  if (app.cardsOpen.length === 2) {
    checkCardsMatch(app.cardsOpen[0], app.cardsOpen[1])
      ? match(app.cardsOpen[0], app.cardsOpen[1])
      : unmatch(app.cardsOpen[0], app.cardsOpen[1]);
  }

  if (app.points === 8) {
    setTimeout(() => {
      congratulations();
    }, 3000);
  }
}

function match(card, otherCard) {
  disableCards(card, otherCard);
  app.cardsMatched.push(card);
  app.cardsMatched.push(otherCard);

  app.cardsOpen = [];

  app.points++;
  updateScore();
}

function unmatch(card, otherCard) {
  setTimeout(() => {
    unflipCard(card);
    unflipCard(otherCard);
  }, 1000);
  app.cardsOpen = [];
}

function disableCards(card, otherCard) {
  card.onclick = "";
  otherCard.onclick = "";
}

function checkCardsMatch(card, otherCard) {
  return card.id === otherCard.id && card.value !== otherCard.value;
}

function updateScore() {
  const moves = document.getElementById("moves");
  moves.innerHTML = `Movimentos: ${app.moves} - Pontos: ${app.points}`;
}

function updateTimer() {
  const timer = document.getElementById("timer");
  timer.innerHTML = `Tempo: ${app.timer} s`;
}

function mountCardHtml(card, index) {
  const divCard = document.createElement("div");
  divCard.setAttribute("class", "divCard");
  divCard.setAttribute("id", `${card}`);
  divCard.value = index;

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

function flipCard(card) {
  card.onclick = "";
  card.childNodes[1].animate(
    [
      {
        opacity: 1,
        height: "100px"
      },
      {
        opacity: 0,
        height: 0
      }
    ],
    {
      duration: 500
    }
  );
  card.childNodes[0].animate(
    [
      {
        opacity: 0,
        height: 0
      },
      {
        opacity: 1,
        height: "100px"
      }
    ],
    {
      duration: 500
    }
  );
  card.childNodes[1].style.display = "none";
  card.childNodes[0].style.display = "block";
}

function unflipCard(card) {
  card.childNodes[0].animate(
    [
      {
        opacity: 1,
        height: "100px"
      },
      {
        opacity: 0,
        height: 0
      }
    ],
    {
      duration: 500
    }
  );
  card.childNodes[1].animate(
    [
      {
        opacity: 0,
        height: 0
      },
      {
        opacity: 1,
        height: "100px"
      }
    ],
    {
      duration: 500
    }
  );
  card.childNodes[0].style.display = "none";
  card.childNodes[1].style.display = "block";
  card.onclick = cardOpen;
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

function congratulations() {
  const ranking = JSON.parse(localStorage.getItem("ranking"));
  ranking[app.timer] = {
    movimentos: app.moves,
    pontos: app.points
  };

  localStorage.setItem("ranking", JSON.stringify(ranking));
  app.gameStarted = false;
  cleanUp();

  const button = document.getElementById("buttonStart");
  button.innerHTML = "Jogar novamente";

  button.onclick = () => {
    cleanUp();
    initializeBoard();
  };

  const mensagem = document.createElement("mensagem");
  mensagem.setAttribute("id", "mensagem");
  mensagem.innerHTML = "Parabens, voce venceu";
  alert("Parabens, voce venceu")
  mensagem.style.display = "block";

  document.getElementById("tabuleiro").appendChild(mensagem);

  const body = document.body;
  const rankingParapgraph = document.getElementById("ranking");
  rankingParapgraph.style.display = "block";
  rankingParapgraph.innerHTML = "<br>Ranking:<br>";

  for (element in ranking) {
    rankingParapgraph.innerHTML += `${element} s - Movimentos: ${ranking[element].movimentos} - Pontos: ${ranking[element].pontos}<br>`;
  }
  body.appendChild(rankingParapgraph);
}

app.inicio();
