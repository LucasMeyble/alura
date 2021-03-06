//classe abstrata
import { Cliente } from './Cliente.js'

export class Conta {
  // #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields
  _saldo = 0;
  _cliente;

  set cliente(novoValor){
    if(novoValor instanceof Cliente){
      this._cliente = novoValor;
    }
  }

  get cliente(){
    return this._cliente;
  }

  //eu coloco so o get pois ele so vai poder pear o soaldo e nunca colocar, se nao for ultilizado o metodo depositar
  get saldo(){
    return this._saldo;
  }

  constructor(saldoInicial, cliente, agencia) {
    if(this.constructor == Conta){
    throw new Error('vc nao deveria instaciar uma classe do tipo conta diretamente');
    }

    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }
  //metodo abstrado, no caso deve sempre ser sobrescrito em uma conta especifica
  sacar(valor) {
    throw new Error('o metodo sacar da conta é abstrato ')
  }

  _sacar(valor, taxa){
    const valorSacado = valor * taxa;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }

    return 0;
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }

  transferir(valor, contaUsuario) {
    const valorSacado = this.sacar(valor);
    contaUsuario.depositar(valorSacado);
  }

}