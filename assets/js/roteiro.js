const jogoAdivinha = {
    semente: 100,
    tentativa : 0,
    numeroSorteado : function geraValorAleatorio () {
      return Math.round(Math.random() * this.semente);
    }
  }
  
  const btnVerifica = document.getElementById('btnVerifica');
  const status = document.getElementById("status");
  
  let tentativa = document.getElementById("tentativa");
  let numeroSorteado = jogoAdivinha.numeroSorteado();
  
  function atualizarTentativa(tentativa, valor){
    if(valor > 1){
      tentativa.innerHTML = "Tentativas : <span style='color:rgb(38, 8, 234);'>" + valor + "</span>";
    }else{
      tentativa.innerHTML = "Tentativa : <span style='color:rgb(38, 8, 234);'>" + valor + "</span>";
    }
  }
  
  btnVerifica.onclick = function(){
    let chute = document.getElementById("chute").value;
  
    if(!!!chute){
      alert("Digite algum valor")
      return; 
    }
    
    atualizarTentativa(tentativa ,++jogoAdivinha.tentativa);
    
    if(numeroSorteado == chute){
      status.innerHTML = "<span style='color:#00C853;'>Parabéns, você acertou!!</span>";
      btnVerifica.hidden = true;
    }else if(numeroSorteado > chute){
      status.innerText =  "O número sorteado é maior";
    }else{
      status.innerText =  "O número sorteado é menor";
    }
  }