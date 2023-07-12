import { Pessoa } from "./pessoa";

export class Funcionario extends Pessoa {
  constructor(name: string) {
    super(name);
  }

  override message(): void {
    super.message();
    console.log("eu sou um empregado")
  }
}
