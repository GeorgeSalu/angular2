/*
  os namespaces são uma form especifica do typescript para organizar codigo,
  namespaces são simplesmente objetos javascript nomeados no namespace global.
  isso torna os namespaces uma construção muito simples de usar
*/

import { Pessoa1 } from "./module"

console.log(Pessoa1.nome)
console.log(Pessoa1.calc())