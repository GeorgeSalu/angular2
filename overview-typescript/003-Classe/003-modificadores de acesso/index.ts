
class Pessoa {
  public nome: string;
  public idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public comer(comida: string) {
    return `O ${this.nome} comeu ${comida}`
  }

  protected fezAniversario() {
    return `o ${this.nome} fez tantos anos ${this.idade++}`
  }

}

const pessoa = new Pessoa("george", 31);
