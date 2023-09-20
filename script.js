
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

const calculadora = new Calculadora('', '', '', 'display')
document.querySelector('.botaoLimpar').addEventListener("click", () => { display.innerHTML = "" })





