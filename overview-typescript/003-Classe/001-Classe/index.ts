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

}

const pessoa1 = new Pessoa("george", 31);
const pessoa2 = new Pessoa("joao", 41);

console.log(pessoa1.nome);
console.log(pessoa1.idade);

console.log(pessoa2.nome);
console.log(pessoa2.idade);