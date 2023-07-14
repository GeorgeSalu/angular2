export abstract class ContaBancaria {
  constructor(public titulo: string, protected saldo: number = 0) {}

  depositar(valor: number): void {
    this.saldo += valor;
  }

  abstract sacar(valor: number): void;

  get getSaldo(): number {
    return this.saldo;
  }
}
