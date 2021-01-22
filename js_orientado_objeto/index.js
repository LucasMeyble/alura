class Cliente {
  nome;
  cpf;
  
}

class ContaCorrente {
  agencia;
  #saldo = 0;

  sacar(valor) {
    if(this.#saldo >= valor){
      this.#saldo -= valor;
      console.log(this.#saldo);
    }
  }

  depositar(valor) {
    if(valor > 0){
      this.#saldo += valor;
      console.log(this.#saldo);
    }
  }
}

const Cliente1 = new Cliente();

Cliente1.nome = 'lucas';
Cliente1.cpf = 70993119454;

const Cliente2 = new Cliente();
Cliente2.nome = 'alice';
Cliente2.cpf = 70993121984;

const contaCorrenteLucas = new ContaCorrente();
contaCorrenteLucas.agencia = 1001;
contaCorrenteLucas.depositar(100);
console.log(contaCorrenteLucas);
contaCorrenteLucas.depositar(100);
console.log(contaCorrenteLucas);
contaCorrenteLucas.sacar(50);
console.log(contaCorrenteLucas);


console.log(Cliente1);
console.log(Cliente2);