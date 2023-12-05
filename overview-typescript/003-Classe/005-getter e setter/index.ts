/**
  getters e setters são usados para proteger seus dados 
  especialmente na criação de classes.

  para cada instancia de variavel, um metodo getter retorna seu valor
  enquanto um metodo setter o define ou atualiza.

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