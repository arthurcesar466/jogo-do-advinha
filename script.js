function checkGuess() {
    var guess = document.getElementById("guess").value;
    var result = document.getElementById("result");
    result.innerHTML = "Você errou!";
    document.getElementById("reiniciar").removeAttribute("disabled");
  }
  
  function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
  }
  
  limparCampo();
  
  function reniciarJogo() {
    limparCampo();
    tentativas = 1;
    document.getElementById("reiniciar").setAttribute("disabled", true);
    document.getElementById("result").innerHTML = ""; 
  }