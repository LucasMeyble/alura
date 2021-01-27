import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import {Cliente} from './Cliente.js';


const Cliente1 = new Cliente('lucas', 70993119454);

const contaCorrenteLucas = new ContaCorrente(Cliente1, 1001);
contaCorrenteLucas.depositar(500);
contaCorrenteLucas.sacar(100);

const contaPupanca = new ContaPoupanca(50, Cliente1, 1001);
contaPupanca.sacar(10);

console.log(contaPupanca);
console.log(contaCorrenteLucas);
