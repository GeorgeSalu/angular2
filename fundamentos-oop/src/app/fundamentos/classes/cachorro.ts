import { Animal } from "./animal";

export class Cachorro extends Animal {
  override barulho(): string {
    return "rou rou"
  }
}
