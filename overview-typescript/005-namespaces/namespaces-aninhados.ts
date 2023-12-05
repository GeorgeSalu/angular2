/*
  os namespaces são uma forma especifica do typescript para organizar codigo,
  namespaces são simplesmente objetos javascript nomeados no namespace global.
  isso torna os namespaces uma construção muito simples de usar
*/

namespace Pessoa {
  export namespace Pessoa1 {
    export let nome = "joao"
  
    export const calc = () => {
      return 1 + 1
    }
  
  }
}

console.log(Pessoa.Pessoa1.nome)