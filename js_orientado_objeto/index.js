import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const Cliente1 = new Cliente('lucas', 70993119454);

const Cliente2 = new Cliente('alice', 70993121984);

const contaCorrenteLucas = new ContaCorrente(1001, Cliente1);
contaCorrenteLucas.depositar(500);

const contaCorrenteAlice = new ContaCorrente(1002, Cliente2);

contaCorrenteLucas.transferir(200, contaCorrenteAlice);

console.log(contaCorrenteAlice.agencia, contaCorrenteAlice.cliente);
