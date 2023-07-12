export class MinhaPrimeiraClasse {
  protected nome: string;
  protected idade: number;
  protected cargo: string;

  constructor(nome: string, idade: number, cargo: string) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  get mostarNome(): string {
    return this.nome;
  }

  set setNome(name: string) {
    if(name != "") {
      this.nome = name
    } else {
      console.log("insira um valor para nome")
    }
  }

}
