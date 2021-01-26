import {Cliente} from './Cliente.js'

export class ContaCorrente {
  agencia;
  #cliente;
  // o uso de static se da quando quermos q a variavel seja de um escopo da classe como um todo.
  static numeroDeContas = 0;
  
  // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
  #saldo = 0;

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

  constructor(agencia, cliente){
    this.agencia = agencia;
    this.cliente = cliente;
    
    //chamamos ContaCorrente pois numero d econtas esta em um escopo de classe em geral.
    ContaCorrente.numeroDeContas +=1
  }

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

  transferir(valor, contaUsuario){
    const valorSacado = this.sacar(valor);
    contaUsuario.depositar(valorSacado);
  }
}