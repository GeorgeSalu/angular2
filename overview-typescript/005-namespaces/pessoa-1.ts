/*
  os namespaces são uma froma especifica do typescript para organizar codigo,
  namespaces são simplesmente objetos javascript nomeados no namespace global.
  isso torna os namespaces uma construção muito simples de usar
*/

export namespace Pessoa1 {
  export let nome = "joao"

  export const calc = () => {
    return 1 + 1
  }

}

console.log(Pessoa1.nome)
console.log(Pessoa1.calc())