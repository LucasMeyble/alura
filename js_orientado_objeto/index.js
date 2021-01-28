import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaSalario } from "./ContaSalario.js";

const Cliente1 = new Cliente("lucas", 70993119454);

const contaCorrenteLucas = new ContaCorrente(Cliente1, 1001);
const contaPupanca = new ContaPoupanca(50, Cliente1, 1001);

const contaSalario = new ContaSalario(Cliente1);

contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);
