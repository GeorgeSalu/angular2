/**
  public - pode ser acessado tanto pela mesma classe, classes filhas e outras classes
  protected - pode ser acessado pela mesma classe e classes filhas, não pode ser acessado por outras classes
  private - pode ser acessada somente pela propria classe

 */

class Pessoa {
  public nome: string = "";
  public idade: number = 0;

  private _profissao: string = "programador";

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

class George extends Pessoa {}
class Maria extends Pessoa {}

const george = new George("george", 20);
const maria = new Maria("maria", 30);

console.log(george)
console.log(maria)