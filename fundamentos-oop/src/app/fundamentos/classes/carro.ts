import { Veiculo } from "./veiculo";

export class Carro extends Veiculo {

  override mover(): void {
    console.log(`O carro ${this.marca} ${this.modelo} esta se movendo`)
  }

}
