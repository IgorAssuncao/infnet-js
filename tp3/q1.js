mydiv = document.getElementById("q1");

minValue = document.createElement("input");
maxValue = document.createElement("input");
buttonQ1 = document.createElement("button");
labelQ1 = document.createElement("p");

minValue.setAttribute("type", "number");
minValue.setAttribute("placeholder", "valor min");
maxValue.setAttribute("type", "number");
maxValue.setAttribute("placeholder", "valor max");
minValue.required = true;
maxValue.required = true;

buttonQ1.setAttribute("onclick", "calcular()");
buttonQ1.appendChild(document.createTextNode("Calcular divisiveis por 2 e 3"));

mydiv.appendChild(minValue);
mydiv.appendChild(maxValue);
mydiv.appendChild(buttonQ1);
mydiv.appendChild(labelQ1);

var counter = 0;

function calcular() {
  console.log("entrou na function");
  if (parseInt(minValue.value) > 0 && parseInt(maxValue.value) > 0) {
    for (
      let index = parseInt(minValue.value) + 1;
      index < maxValue.value;
      index++
    ) {
      if (index % 6 == 0) {
        counter++;
      }
    }
    labelQ1.innerHTML = "";
    labelQ1.appendChild(document.createTextNode(counter));
    counter = 0;
  }
}
