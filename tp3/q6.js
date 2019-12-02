mydiv = document.getElementById("q6");

usuario = document.createElement("input");
senha = document.createElement("input");
login = document.createElement("button");
logout = document.createElement("button");
cadastro = document.createElement("button");
saida = document.createElement("p");

saida.appendChild(document.createTextNode("Usuario Logado"));

usuario.setAttribute("placeholder", "Usuario");
senha.setAttribute("placeholder", "Senha");

login.setAttribute("onclick", "logar()");
login.appendChild(document.createTextNode("login"));
logout.setAttribute("onclick", "deslogar()");
logout.appendChild(document.createTextNode("logout"));
cadastro.setAttribute("onclick", "cadastrar()");
cadastro.appendChild(document.createTextNode("cadastro"));

visivel(true);

mydiv.appendChild(usuario);
mydiv.appendChild(senha);
mydiv.appendChild(saida);
mydiv.appendChild(login);
mydiv.appendChild(cadastro);
mydiv.appendChild(logout);

var usuarios = [];
var storage = window.localStorage;
if (storage.getItem("usuarios") && storage.getItem("usuarios").length > 0) {
  usuarios = JSON.parse(storage.getItem("usuarios"));
}

function cadastrar() {
  if (valida()) {
    usuarios.push({ user: usuario.value, pass: senha.value });
    storage.setItem("usuarios", JSON.stringify(usuarios));
    limpar();
  } else {
    alert("Preencha todos os campos");
    usuario.focus();
  }
}

function logar() {
  if (valida()) {
    usuarios.every(function(element) {
      if (usuario.value == element.user && senha.value == element.pass) {
        limpar();
        return visivel(false);
      } else {
        usuario.focus();
        return alert("Dados Incorretos");
      }
    });
  } else {
    alert("Preencha todos os campos");
    usuario.focus();
  }
}

function deslogar() {
  visivel(true);
}

function valida() {
  if (usuario.value != "" && senha.value != "") return true;
  else return false;
}

function visivel(v) {
  if (v) {
    usuario.style.display = "inline";
    senha.style.display = "inline";
    login.style.display = "inline";
    cadastro.style.display = "inline";
    logout.style.display = "none";
    saida.style.display = "none";
  } else {
    usuario.style.display = "none";
    senha.style.display = "none";
    login.style.display = "none";
    cadastro.style.display = "none";
    logout.style.display = "inline";
    saida.style.display = "inline";
  }
}

function limpar() {
  usuario.value = "";
  senha.value = "";
}
