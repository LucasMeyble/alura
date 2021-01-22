import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const Cliente1 = new Cliente();

Cliente1.nome = 'lucas';
Cliente1.cpf = 70993119454;

const Cliente2 = new Cliente();
Cliente2.nome = 'alice';
Cliente2.cpf = 70993121984;

const contaCorrenteLucas = new ContaCorrente();
contaCorrenteLucas.agencia = 1001;
contaCorrenteLucas.depositar(100);
contaCorrenteLucas.depositar(100);

const valorSacado = contaCorrenteLucas.sacar(50);
console.log(valorSacado);
console.log(contaCorrenteLucas);


