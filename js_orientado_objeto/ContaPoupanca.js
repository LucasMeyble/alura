export class ContaPoupanca {

  #saldo;

  constructor(saldoInicial, cliente, agencia) {
    this.#saldo = saldoInicial;
    this.cliente = cliente;
    this.agencia = agencia;
  }

  sacar(valor) {
    if (this.#saldo >= valor) {
      this.#saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this.#saldo += valor;
  }

  transferir(valor, contaUsuario) {
    const valorSacado = this.sacar(valor);
    contaUsuario.depositar(valorSacado);
  }
}
