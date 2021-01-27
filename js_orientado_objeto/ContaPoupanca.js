import { Conta } from './Conta.js';

export class ContaPoupanca extends Conta{

  #saldo;

  constructor(saldoInicial, cliente, agencia) {
    super(saldoInicial, cliente, agencia);
  }
}
