function caculateFactorial(number) {
  if (number === 1) return 1;

  return number * caculateFactorial(number - 1);
}

function fatorial() {
  resultFactorial.innerHTML = '';
  const startDate = new Date();
  resultFactorial.appendChild(document.createTextNode(`${inputValue.value}! = ${caculateFactorial(parseInt(inputValue.value))} - ${new Date() - startDate}ms`));
}

const q2Element = document.getElementById("q2");

q2Element.appendChild(document.createTextNode('Q2'));
q2Element.appendChild(document.createElement("br"));
q2Element.appendChild(document.createElement("br"));

q2Element.appendChild(document.createTextNode("Valor:"));
q2Element.appendChild(document.createElement("br"));

const inputValue = document.createElement("input");
inputValue.setAttribute("type", "number");
inputValue.setAttribute("placeholder", "Valor");
inputValue.required = true;
q2Element.appendChild(inputValue);

q2Element.appendChild(document.createElement("br"));

calculateButton = document.createElement("button");
calculateButton.innerHTML = "Calculate factorial";
calculateButton.setAttribute("onclick", "fatorial()");
q2Element.appendChild(document.createElement("br"));
q2Element.appendChild(calculateButton);
q2Element.appendChild(document.createElement("br"));

q2Element.appendChild(document.createTextNode("Resultado: "));

const resultFactorial = document.createElement("p");
q2Element.appendChild(resultFactorial);
