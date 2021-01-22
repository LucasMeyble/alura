export class ContaCorrente {
  agencia;
  // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
  #saldo = 0;

  sacar(valor) {
    if(this.#saldo >= valor){
      this.#saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if(valor <= 0){
      return;
    }
    this.#saldo += valor;
  }
}