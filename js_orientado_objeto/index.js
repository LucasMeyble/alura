import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const Cliente1 = new Cliente();

Cliente1.nome = 'lucas';
Cliente1.cpf = 70993119454;

const Cliente2 = new Cliente();


const contaCorrenteLucas = new ContaCorrente();
contaCorrenteLucas.agencia = 1001;
contaCorrenteLucas.cliente = Cliente1;
contaCorrenteLucas.depositar(500);

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.cliente = new Cliente();
contaCorrenteAlice.cliente.nome = 'alice';
contaCorrenteAlice.cliente.cpf = 70993121984;
contaCorrenteAlice.agencia = 1002;

contaCorrenteLucas.transferir(200, contaCorrenteAlice);

console.log(contaCorrenteAlice);
