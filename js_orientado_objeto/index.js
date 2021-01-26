import {Cliente} from './Cliente.js';
import {Conta} from './Conta.js';

const Cliente1 = new Cliente('lucas', 70993119454);

const contaCorrenteLucas = new Conta(0, Cliente1, 1001);
contaCorrenteLucas.depositar(500);
contaCorrenteLucas.sacar(100);

const contaPupanca = new Conta(50, Cliente1, 1001)

console.log(contaPupanca);
console.log(contaCorrenteLucas);
