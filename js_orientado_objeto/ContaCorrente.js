import { Conta } from './Conta.js';

export class ContaCorrente extends Conta{

  // o uso de static se da quando quermos q a variavel seja de um escopo da classe como um todo.
  static numeroDeContas = 0;

  constructor(cliente, agencia){
    super(0, cliente, agencia);
    //chamamos ContaCorrente pois numero d econtas esta em um escopo de classe em geral.
    ContaCorrente.numeroDeContas +=1;
  }
  //sobreescrevendo o comportamento do metodo sacar
  sacar(valor) {
    let taxa = 1.1;
    return super._sacar(valor, taxa); 
    }
  }
