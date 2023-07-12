import { InstrumentoMusical } from "../interfaces/instrumentoMusical";

export class Guitarra implements InstrumentoMusical {

  tocar(): void {
    console.log("tocando arcordes de guitarra")
  }

}
