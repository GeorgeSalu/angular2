import { Usuario } from "./usuario";

export class Cliente extends Usuario {
  constructor(id: number, nome: string) {
    super(id, nome);
  }

  override getNome(): string {
    return `Ola, ${this.nome}`
  }

}
