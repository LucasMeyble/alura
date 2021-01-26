import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';
import {ContaPoupanca} from './ContaPoupanca.js';

const Cliente1 = new Cliente('lucas', 70993119454);

const contaCorrenteLucas = new ContaCorrente(1001, Cliente1);
contaCorrenteLucas.depositar(500);
contaCorrenteLucas.sacar(100);

const contaPupanca = new ContaPoupanca(50, Cliente1, 1001)

console.log(contaPupanca);
console.log(contaCorrenteLucas);
