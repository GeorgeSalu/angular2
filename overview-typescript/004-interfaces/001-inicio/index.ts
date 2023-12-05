/*
  as interfaces typescript definem os contratos em seu codigo.
  eles também fornecem nomes explicitos para verificação de tipo
*/

interface IPessoa {
  nome: string
  idade: number
  readonly cpf: number
}

const pessoa: IPessoa = {nome: "george", idade: 1, cpf: 12121}

console.log(pessoa)

class Joao implements IPessoa {
  nome: string = "joao";
  idade: number = 11;
  readonly cpf: number = 111;
}


