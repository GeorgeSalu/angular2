class Pessoa {
  nome: string = "";
  idade: number = 0;

  constructor(nome: string, idade: number){
    this.nome = nome;
    this.idade = idade;
  }

}

const pessoa1 = new Pessoa("george", 30);
const pessoa2 = new Pessoa("joao", 67);

console.log(pessoa1.nome);
console.log(pessoa2.nome);