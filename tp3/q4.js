mydiv = document.getElementById("q4");

quantidade = document.createElement("input");
minQ4 = document.createElement("input");
maxQ4 = document.createElement("input");
listaQ4 = document.createElement("p");
buttonQ4 = document.createElement("button");

minQ4.setAttribute("type", "number");
maxQ4.setAttribute("type", "number");
maxQ4.setAttribute("type", "number");
quantidade.setAttribute("placeholder", "Quantidade de numeros");
minQ4.setAttribute("placeholder", "valor min");
maxQ4.setAttribute("placeholder", "valor max");

buttonQ4.setAttribute("onclick", "calcular()");
buttonQ4.appendChild(document.createTextNode("calcular"));

mydiv.appendChild(buttonQ4);
mydiv.appendChild(quantidade);
mydiv.appendChild(minQ4);
mydiv.appendChild(maxQ4);
mydiv.appendChild(listaQ4);

function calcular() {
  listaQ4.innerHTML = "";

  if (quantidade.value > 0 && maxQ4.value > 0 && minQ4.value > 0) {
    var array = [];
    for (let index = 0; index <= quantidade.value; index++) {
      minQ4Value = Math.ceil(minQ4.value);
      maxQ4Value = Math.floor(maxQ4.value);
      let numero = Math.round(
        Math.random() * (maxQ4Value - minQ4Value) + minQ4Value
      );
      while (!array.includes(numero)) array.push(numero);
    }
  }

  array.forEach(element => {
    listaQ4.appendChild(document.createTextNode(element));
    listaQ4.appendChild(document.createElement("BR"));
  });
}
