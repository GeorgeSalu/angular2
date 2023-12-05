/**
  public - pode ser acessado tanto pela mesma classe, classes filhas e outras classes
  protected - pode ser acessado pela mesma classe e classes filhas, não pode ser acessado por outras classes
  private - pode ser acessada somente pela propria classe

 */

class Pessoa {
  public nome: string = "";
  public idade: number = 0;

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

class George extends Pessoa {

  private _profissao: string = "programador";

  constructor() {
    super("george", 22);
  }

  get profissao() {
    return this._profissao;
  }

  set profissao(valor: string) {
    this._profissao = valor;
  }

}

const george = new George();
george.profissao = 'padre'
console.log(george.profissao)