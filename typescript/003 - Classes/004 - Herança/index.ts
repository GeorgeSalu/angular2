class Pessoa {
  public nome: string = "";
  public idade: number = 0;
  private _profissao: string = "programador";

  constructor(nome: string, idade: number){
    this.nome = nome;
    this.idade = idade;
  }

  public comer(comida: string) {
    return `Ò ${this.nome} comeu ${comida}`;
  }

  public fezAniversario() {
    return `Ò ${this.nome} fez tantos anos ${this.idade + 1}`;
  }

}

class Dener extends Pessoa {

}

const dener = new Dener("dener", 20);
const maria = new Dener("maria", 20);

console.log(dener.nome);
console.log(maria.nome);