class Pessoa {
  protected nome: string = "";
  protected idade: number = 0;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public comer(comida: string) {
    return `O ${this.nome} comeu ${comida}`;
  }

  public fezAniversario() {
    return `O ${this.nome} fez tantos anos ${++this.idade}`;
  }
}

class Dener extends Pessoa {
  private _profissao: string = "Programador";

  constructor() {
    super("Dener", 31);
  }

  get profissao() {
    return this._profissao;
  }

}

const dener = new Dener();
console.log(dener.profissao)