mydiv = document.getElementById("q2");

inputQ2 = document.createElement("input");
labelQ2 = document.createElement("p");
buttonQ2 = document.createElement("button");

inputQ2.setAttribute("type", "number");
inputQ2.setAttribute("placeholder", "fatorial");
inputQ2.required = true;

buttonQ2.setAttribute("onclick", "calcularFatorial()");
buttonQ2.appendChild(document.createTextNode("calcularFatorial"));

mydiv.appendChild(inputQ2);
mydiv.appendChild(buttonQ2);
mydiv.appendChild(labelQ2);

function fatorial(number) {
  if (number == 1) return 1;
  return number * fatorial(number - 1);
}

function calcularFatorial() {
  labelQ2.innerHTML = "";
  if (inputQ2.value > 0) {
    let inicio = new Date();
    labelQ2.appendChild(
      document.createTextNode(
        `${inputQ2.value}! = ${fatorial(inputQ2.value)} (${new Date() -
          inicio} ms)`
      )
    );
  }
}
