const operacaoEnum = ({
  Divisao: '/',
  Multiplicacao: '*',
  Adicao: '+',
  Subtracao: '-'
})

const operacoes = ['+', '-', '*', '/'];
class Calculadora {
  constructor() {
    this._valorA = '';
    this._valorB = '';
    this._operacao = '';
    this._resultado = '0.0';
    this._display = '';
  }
  get valorA() {
    return this._valorA;
  }

  get valorB() {
    return this._valorB;
  }

  get operacao() {
    return this._operacao;
  }

  get resultado() {
    return this._resultado;
  }

  get display() {
    return this._display;
  }

  set valorA(valor) {
    this._valorA = valor;
  }

  set valorB(valor) {
    this._valorB = valor;
  }

  set operacao(operacao) {
    this._operacao = operacao;
  }

  set resultado(resultado) {
    this._resultado = resultado;
  }

  set display(display) {
    this._display = display;
  }

  adicionarDigito(digito) {
    if (operacoes.includes(digito)) {
      if (!this.operacao) {
        this.operacao = digito;
        this.display += ` ${this.operacao} `;
        console.log(`operacao definida como: ${this.operacao}`)
        return
        
      }
    } else {
      if (!this.operacao) {
        this.valorA += digito;
        console.log(`valor de valorA atual: ${this.valorA}`)
      } else {
        this.valorB += digito;
      }
      this.display += digito;
      console.log(`valor de valorB atual:${this.valorB}`)
    }
   
  }

  

  calcular() {
    if (this.valorA && this.valorB && this.operacao) {
      const numeroA = parseFloat(this.valorA.replace(',', '.'));
      const numeroB = parseFloat(this.valorB.replace(',', '.'));

      switch (this.operacao) {
        case operacaoEnum.Adicao:
          this.resultado = (numeroA + numeroB).toString().replace('.', ',');
          break;
        case operacaoEnum.Subtracao:
          this.resultado = (numeroA - numeroB).toString().replace('.', ',');
          break;
        case operacaoEnum.Multiplicacao:
          this.resultado = (numeroA * numeroB).toString().replace('.', ',');
          break;
        case operacaoEnum.Divisao:
          if (numeroB === 0) {
            this.resultado = 'Nao é possível dividir por zero';
          } else {
            this.resultado = (numeroA / numeroB).toString().replace('.', ',');
            break
          }

      }


      this.display = this.resultado;
      this.valorA = '';
      this.valorB = '';
      this.operacao = '';
    }
  }

  limparDisplay() {
    this.valorA = '';
    this.valorB = '';
    this.operacao = '';
    this.resultado = '0.0';
    this.display = '';
  }
}

const calculadora = new Calculadora();


atribuirValor = (digito) => {
  calculadora.adicionarDigito(digito);
  atualizarDisplay();

}

calcular = () => {
  calculadora.calcular();
  atualizarDisplay();
}

atualizarDisplay = () => {
  document.getElementById('display').value = calculadora.display;
}

limparDisplay = () => {
  calculadora.limparDisplay();
  atualizarDisplay();
}