mydiv = document.getElementById("q3");

titulo = document.createElement("p");
aprovados = document.createElement("p");
rejeitados = document.createElement("p");
rodape = document.createElement("p");
buttonQ3 = document.createElement("button");

buttonQ3.setAttribute("onclick", "report()");
buttonQ3.appendChild(document.createTextNode("report"));

mydiv.appendChild(buttonQ3);
mydiv.appendChild(titulo);
mydiv.appendChild(aprovados);
mydiv.appendChild(rejeitados);
mydiv.appendChild(rodape);

function report() {
  titulo.innerHTML = "";
  aprovados.innerHTML = "";
  rejeitados.innerHTML = "";
  rodape.innerHTML = "";

  var arrayAlunos = [];
  var aprovadosCounter = 0;
  var reprovadosCounter = 0;

  titulo.appendChild(document.createTextNode("Meu Relatorio"));
  for (let i = 1; i <= 20; i++) {
    arrayAlunos.push({
      numero: i,
      nota: Math.round(Math.random() * 100)
    });
  }

  for (const aluno of arrayAlunos) {
    if (aluno.nota >= 50) {
      aprovadosCounter++;
      aprovados.appendChild(
        document.createTextNode(
          `Aluno nr ${aluno.numero} - Nota ${aluno.nota} [APROVADO]`
        )
      );
      aprovados.appendChild(document.createElement("br"));
    } else {
      reprovadosCounter++;
      rejeitados.appendChild(
        document.createTextNode(
          `Aluno nr ${aluno.numero} - Nota ${aluno.nota} [REPROVADO]`
        )
      );
      rejeitados.appendChild(document.createElement("br"));
    }
  }
  rodape.appendChild(
    document.createTextNode(`APROVADOS (${aprovadosCounter}) ${(aprovadosCounter /
      arrayAlunos.length) *
      100}%
            | REPROVADOS (${reprovadosCounter})${(reprovadosCounter /
      arrayAlunos.length) *
      100}%`)
  );
}
