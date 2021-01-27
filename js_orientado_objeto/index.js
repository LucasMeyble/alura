import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import {Cliente} from './Cliente.js';
import {Conta} from './Conta.js';

const Cliente1 = new Cliente('lucas', 70993119454);

const contaCorrenteLucas = new ContaCorrente(0, Cliente1, 1001);
contaCorrenteLucas.depositar(500);
contaCorrenteLucas.sacar(100);

const contaPupanca = new ContaPoupanca(50, Cliente1, 1001);

console.log(contaPupanca);
console.log(contaCorrenteLucas);
