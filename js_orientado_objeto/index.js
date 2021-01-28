import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

const Cliente1 = new Cliente("lucas", 70993119454);

const contaCorrenteLucas = new ContaCorrente(Cliente1, 1001);
const contaPupanca = new ContaPoupanca(50, Cliente1, 1001);
const conta = new Conta(50, Cliente1, 1001);

console.log(conta);
