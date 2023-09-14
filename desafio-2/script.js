// Enumerador para as operações
const OperacaoEnum = {
  ADICAO: 'ADICAO',
  SUBTRACAO: 'SUBTRACAO',
  MULTIPLICACAO: 'MULTIPLICACAO',
  DIVISAO: 'DIVISAO',
};

class Calculadora {
  
  constructor() {
    this.valorA = '';
    this.valorB = '';
    this.operacao = '';
    this.display = document.getElementById('display');
  }

  setOperacao(operacao) {
    this.operacao = operacao;
    return this.operacao
  }


  clear(){
    this.valorA = ''
    this.valorB = ''
    this.operacao = ''
    return 
  }
  addNumero(numero) {
    this.valorA = ''; // Limpa valorA
    this.valorB = ''; // Limpa valorB
  
    if (this.operacao === '') {
      this.valorA += numero;
    } else {
      this.valorB += numero;
    }
    return this.display.textContent = this.operacao === '' ? this.valorA : this.valorB;
  }

}



const calculadora = new Calculadora()

function addDisplay(numero){
  
  console.log(calculadora.addNumero(numero))
}
function definirOperacao(operacao) {
  console.log(calculadora.setOperacao(operacao))
}












   
   

  















 




  
  
 