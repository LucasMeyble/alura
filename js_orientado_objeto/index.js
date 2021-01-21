class Cliente {
  nome;
  cpf;
  agendia;
  saldo;
}

const Cliente1 = new Cliente();
const Cliente2 = new Cliente();

Cliente1.nome = 'lucas';
Cliente1.cpf = 70993119454;
Cliente1.agencia = 1001;
Cliente1.saldo = 0;

Cliente2.nome = 'alice';
Cliente2.cpf = 70993121984;
Cliente2.agencia = 1002;
Cliente2.saldo = 100;

console.log(Cliente1);
console.log(Cliente2);