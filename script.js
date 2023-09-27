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
  getvalorA() {
    return this._valorA;
  }

  getvalorB() {
    return this._valorB;
  }

  getoperacao() {
    return this._operacao;
  }

  getresultado() {
    return this._resultado;
  }

  getdisplay() {
    return this._display;
  }

  setvalorA(valor) {
    this._valorA = valor;
  }

  setvalorB(valor) {
    this._valorB = valor;
  }

  setoperacao(operacao) {
    this._operacao = operacao;
  }

  setresultado(resultado) {
    this._resultado = resultado;
  }

  setdisplay(display) {
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
        console.log(`valor de valorB atual:${this.valorB}`)
      }
      this.display += digito;

    }

  }
  


  calcular() {
    if (this.valorA && this.valorB && this.operacao) {
      const numeroA = parseFloat(this.valorA.replace(',', '.'));
      const numeroB = parseFloat(this.valorB.replace(',', '.'));

      switch (this.operacao) {
        case operacaoEnum.Adicao:
          this.resultado = (numeroA + numeroB).toString().replace('.', ',');
          console.log(`O resultado é:${this.resultado}`)
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
