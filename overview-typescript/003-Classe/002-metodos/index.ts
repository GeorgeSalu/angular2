/**
  uma classe typescript é uma estrutura de programação orientada a objetos
  que possui um conjuto de proprieadades e metodos.

  a classe é um modelo para criar objetos, permitindo que você defina 
  uma estrutura com propriedades e comportamentos

*/

class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  comer(comida: string) {
    return `O ${this.nome} comeu ${comida}`
  }

  fezAniversario() {
    return `o ${this.nome} fez tantos anos ${this.idade++}`
  }

}

const pessoa1 = new Pessoa("george", 31);

console.log(pessoa1.comer('feijoada'))
console.log(pessoa1.fezAniversario())