function caculate() {
  if (parseInt(inputMinValue.value) >= parseInt(inputMaxValue.value))
    return alert("Minimum value must be lower than maximum value");
  let counter = 0;
  for (
    let i = parseInt(inputMinValue.value);
    i < parseInt(inputMaxValue.value);
    i++
  ) {
    /* Aqui tambem e possivel verificar se
     * e divisivel somente por 6, sabendo que
     * 6 e divisivel por 2 e 3 ao mesmo tempo.
     */
    if (i % 2 === 0 && i % 3 === 0) {
      counter++;
    }
  }

  result.innerHTML = "";
  result.appendChild(document.createTextNode(counter));
  counter = 0;
}

const q1Element = document.getElementById("q1");

q1Element.appendChild(document.createTextNode('Q1'));
q1Element.appendChild(document.createElement("br"));

q1Element.appendChild(document.createTextNode("Valor minimo:"));
q1Element.appendChild(document.createElement("br"));

const inputMinValue = document.createElement("input");
inputMinValue.setAttribute("type", "number");
inputMinValue.setAttribute("placeholder", "Valor minimo");
inputMinValue.required = true;
q1Element.appendChild(inputMinValue);

q1Element.appendChild(document.createElement("br"));
q1Element.appendChild(document.createTextNode("Valor maximo:"));
q1Element.appendChild(document.createElement("br"));

const inputMaxValue = document.createElement("input");
inputMaxValue.setAttribute("type", "number");
inputMaxValue.setAttribute("placeholder", "Valor maximo");
inputMaxValue.required = true;
q1Element.appendChild(inputMaxValue);

calculateButton = document.createElement("button");
calculateButton.innerHTML = "Calculate";
calculateButton.setAttribute("onclick", "caculate()");
q1Element.appendChild(document.createElement("br"));
q1Element.appendChild(calculateButton);
q1Element.appendChild(document.createElement("br"));

q1Element.appendChild(document.createTextNode("Resultado: "));

const result = document.createElement("p");
q1Element.appendChild(result);

q1Element.appendChild(document.createElement('br'));
q1Element.appendChild(document.createElement("br"));
