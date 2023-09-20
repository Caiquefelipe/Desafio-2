const Enumerador = {
  ADICAO:'+',
  MULTIPLICACAO:'*',
  SUBTRACAO:'-',
  DIVISAO:'/'
}

class Calculadora {

  constructor(valorA, operacao, valorB, display) {
    this.valorA = valorA;
    this.operacao = operacao;
    this.valorB = valorB;
    this.display = document.getElementById(display);

  }

  setOperacao(operacao) {
    this.operacao = operacao;
    console.log(` ${operacao}`)

  }
}


const botao = document.querySelectorAll('.botao')
const display = document.getElementById('display')
const calcularBotao = document.querySelector('.calcular')
botao.forEach((buttons) => {
  buttons.addEventListener('click', () => {
    display.innerHTML += buttons.innerHTML
  })
})

function executarCalculo(valorA, operacao, valorB) {
  valorA = parseFloat(valorA);
  valorB = parseFloat(valorB);

  switch (operacao) {
      case Enumerador.ADICAO:
          return valorA + valorB;
      case Enumerador.SUBTRACAO:
          return valorA - valorB;
      case Enumerador.DIVISAO:
          return valorA / valorB;
      case Enumerador.MULTIPLICACAO:
          return valorA * valorB
}


const calculadora = new Calculadora('', '', '', 'display')
document.querySelector('.botaoLimpar').addEventListener("click", () => { display.innerHTML ="" })

}
