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
      
    }

    addNumero(numero) {
      if (this.operacao === '') {
        this.valorA += numero;
    } else {
        this.valorB += numero;
    }
    
  }

}










 




  
  
 