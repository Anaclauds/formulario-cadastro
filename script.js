function validarCampos() {
    var nome = document.getElementById("nome").value.trim();
    var sobrenome = document.getElementById("sobrenome").value.trim();
    var email = document.getElementById("email").value.trim();
    var telefone = document.getElementById("telefone").value.trim();
    var cidade = document.getElementById("cidade").value.trim();
    var estado = document.getElementById("estado").value;
  
    var produtosSelecionados = document.querySelectorAll(
      ".clicavelDiv.selecionado"
    );
  
    if (
      nome === "" ||
      sobrenome === "" ||
      email === "" ||
      telefone === "" ||
      cidade === "" ||
      estado === "" ||
      produtosSelecionados.length === 0
    ) {
      alert(
        "Por favor, preencha todos os campos obrigatórios e selecione pelo menos um produto."
      );
      return false;
    }
    return true;
  }
  
  function confirmarCadastro() {
    if (validarCampos()) {
      var confirma = confirm("Deseja realmente confirmar o cadastro?");
      if (confirma) {
        alert("Cadastro confirmado!");
        limparCampos();
        return false;
      } else {
        alert("Cadastro não confirmado.");
        return false;
      }
    } else {
      return false;
    }
  }
  
  function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").selectedIndex = 0;
    document.getElementById("telefone").value = "";
  
    var clicavelDivs = document.querySelectorAll(".clicavelDiv");
    clicavelDivs.forEach(function (div) {
      div.classList.remove("selecionado");
    });
  }
  
  var clicavelDivs = document.querySelectorAll(".clicavelDiv");
  clicavelDivs.forEach(function (div) {
    div.addEventListener("click", function () {
      this.classList.toggle("selecionado");
    });
  });
  