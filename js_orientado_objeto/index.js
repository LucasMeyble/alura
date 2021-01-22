class Cliente {
  nome;
  cpf;
  
}

class ContaCorrente {
  agencia;
  saldo;

  sacar(valor) {
    if(this.saldo >= valor){
      this.saldo -= valor;
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
contaCorrenteLucas.saldo = 0;
console.log(contaCorrenteLucas);
contaCorrenteLucas.saldo = 100;
console.log(contaCorrenteLucas);
contaCorrenteLucas.sacar(50);
console.log(contaCorrenteLucas);


console.log(Cliente1);
console.log(Cliente2);