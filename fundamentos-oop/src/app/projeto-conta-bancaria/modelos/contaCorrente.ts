import { ContaBancaria } from "./contaBancaria";

export class ContaCorrente extends ContaBancaria {
  constructor(titula: string) {
    super(titula)
  }

  override sacar(valor: number): void {
    if(this.saldo >= valor) {
      this.saldo -= valor
    } else {
      console.error("saldo insuficiente");
    }
  }

  override getTipo(): string {
    return "conta corrente"
  }
}
