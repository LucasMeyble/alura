import { Conta } from './Conta.js';

export class ContaCorrente extends Conta{

  // o uso de static se da quando quermos q a variavel seja de um escopo da classe como um todo.
  static numeroDeContas = 0;

  constructor(saldoInicial = 0,cliente, agencia){
    super(saldoInicial, cliente, agencia);
    //chamamos ContaCorrente pois numero d econtas esta em um escopo de classe em geral.
    ContaCorrente.numeroDeContas +=1;
  }
}