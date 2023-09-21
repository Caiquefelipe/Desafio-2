const Enumerador = {
  ADICAO: '+',
  MULTIPLICACAO: '*',
  SUBTRACAO: '-',
  DIVISAO: '/'
}

class Calculadora {

  constructor(valorA, operacao, valorB, display) {
    this._valorA = valorA;
    this._operacao = operacao;
    this._valorB = valorB;
    this._display = document.getElementById('display');

  }

  executarCalculo (){
    this._valorA = parseFloat(this._valorA);
    this._valorB = parseFloat(this._valorB)
    switch (this._operacao) {
      case Enumerador.ADICAO:
        return this._valorA +  this._valorB
      case Enumerador.SUBTRACAO:
        return  this._valorA -  this._valorB;
      case Enumerador.MULTIPLICACAO:
        return  this._valorA *  this._valorB;
      case Enumerador.DIVISAO:
       if(valorB === 0){
        return "Erro:Divisao por zero"
       }
       return valorA / valorB;
       default:
        
    }
    
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
    if(buttons.innerHTML === Enumerador.ADICAO || buttons.SUBTRACAO || Enumerador.DIVISAO || Enumerador.MULTIPLICACAO)
    display.innerHTML += buttons.innerHTML
    
  })
})

 

  const calculadora = new Calculadora(10, '+', 10)
  console.log(calculadora.executarCalculo())
  document.querySelector('.botaoLimpar').addEventListener("click", () => { display.innerHTML = "" })

