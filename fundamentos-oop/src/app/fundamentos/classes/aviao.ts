import { Veiculo } from "./veiculo";

export class Aviao extends Veiculo {

  override mover(): void {
    console.log(`O aviao ${this.marca} ${this.modelo} esta se movendo`)
  }

  outroMetodo(): void {
    console.log("sou uma aviao")
  }

}
