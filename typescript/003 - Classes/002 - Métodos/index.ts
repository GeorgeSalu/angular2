class Pessoa {
  nome: string = "";
  idade: number = 0;

  constructor(nome: string, idade: number){
    this.nome = nome;
    this.idade = idade;
  }

  comer(comida: string) {
    return `Ò ${this.nome} comeu ${comida}`;
  }

  fezAniversario() {
    return `Ò ${this.nome} fez tantos anos ${this.idade + 1}`;
  }

}

const pessoa1 = new Pessoa("george", 21);
console.log(pessoa1.comer("feijoada"));
console.log(pessoa1.fezAniversario());