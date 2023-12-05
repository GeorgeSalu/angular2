/*
  os namespaces são uma froma especifica do typescript para organizar codigo,
  namespaces são simplesmente objetos javascript nomeados no namespace global.
  isso torna os namespaces uma construção muito simples de usar
*/


import { Pessoa1 } from "./pessoa-1"

console.log(Pessoa1.nome)
console.log(Pessoa1.calc())