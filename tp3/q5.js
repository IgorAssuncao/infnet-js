mydiv = document.getElementById("q5");

a = document.createElement("input");
b = document.createElement("input");
c = document.createElement("input");
buttonQ5 = document.createElement("button");
saida = document.createElement("P");

a.setAttribute("type", "number");
b.setAttribute("type", "number");
c.setAttribute("type", "number");
a.setAttribute("placeholder", "Lado A");
b.setAttribute("placeholder", "Lado B");
c.setAttribute("placeholder", "Lado C");

buttonQ5.setAttribute("onclick", "calcular()");
buttonQ5.appendChild(document.createTextNode("calcular"));

mydiv.appendChild(buttonQ5);
mydiv.appendChild(a);
mydiv.appendChild(b);
mydiv.appendChild(c);
mydiv.appendChild(saida);

function calcular() {
  saida.innerHTML = "";
  if (a.value > 0 && b.value > 0 && c.value > 0) {
    saida.appendChild(
      document.createTextNode(checkTriangulo(a.value, b.value, c.value))
    );
  }
}

function checkTriangulo(l1, l2, l3) {
  if (l1 === l2 && l2 === l3) {
    return "Equilatero";
  } else if (
    (l1 > l2 && l2 > l3) ||
    (l2 > l1 && l1 > l3) ||
    (l3 > l2 && l2 > l1)
  ) {
    return "Escaleno";
  } else {
    return "Isosceles";
  }
}
