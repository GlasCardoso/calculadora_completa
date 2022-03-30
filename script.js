var display = document.getElementById('display');
var numeros = document.querySelectorAll('[id*=tecla]');
var operadores = document.querySelectorAll('[id*=operador]');

var novoNumero = true;
var operador;
var numeroAnterior;

var operacaoPendente = () => operador != undefined;

var calcular = () => {
  if (operacaoPendente()){
    var numeroAtual = parseFloat(display.textContent);
    novoNumero = true;
    if (operador == '+'){
      atualizarDisplay(numeroAnterior + numeroAtual);
    } else if (operador == '-'){
       atualizarDisplay(numeroAnterior - numeroAtual);
    }else if (operador == '*'){
       atualizarDisplay(numeroAnterior * numeroAtual);
    }else if (operador == '/'){
       atualizarDisplay(numeroAnterior / numeroAtual);
    }
    
  }
}

var atualizarDisplay = (texto) => {
  if (novoNumero){
    display.textContent = texto;
    novoNumero = false;
      }else{
      display.textContent += texto;
    }  
  }

var inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
numeros.forEach (numero => numero.addEventListener('click',inserirNumero));

var selecionarOperador = (evento) => {
  if (!novoNumero){
    calcular();
    novoNumero = true;
    operador = evento.target.textContent;
    numeroAnterior = parseFloat(display.textContent);
    }
}
operadores.forEach (operador => operador.addEventListener('click',selecionarOperador));

var ativarIgual = () => {
  calcular ();
  operador = undefined;
}
document.getElementById('igual').addEventListener('click', ativarIgual);

var limparDisplay = () => display.textContent = '';
document.getElementById('limparDisplay').addEventListener('click', limparDisplay);

var limparCalculo = () => {
  limparDisplay();
  operador = undefined;
  nomeroNovo = true;
  numeroAnterior = undefined;
}
document.getElementById('limparCalculo').addEventListener('click', limparCalculo);