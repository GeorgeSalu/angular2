namespace Pessoa {
  export namespace Maria {
    const data = 1 + 1;

    export let nome = "maria";
    export const calc = () => {
      return data
    }
  }

  export namespace Joao {
    const data = 1 + 1;

    export let nome = "joao";
    export const calc = () => {
      return data
    }
  }
}

console.log(Pessoa.Joao.nome);