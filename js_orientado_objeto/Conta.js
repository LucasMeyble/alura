import { Cliente } from './Cliente.js'

export class Conta {
  // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
  #saldo = 0;
  #cliente;

  set cliente(novoValor){
    if(novoValor instanceof Cliente){
      this.#cliente = novoValor;
    }
  }

  get cliente(){
    return this.#cliente;
  }

  //eu coloco so o get pois ele so vai poder pear o soaldo e nunca colocar, se nao for ultilizado o metodo depositar
  get saldo(){
    return this.#saldo;
  }

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