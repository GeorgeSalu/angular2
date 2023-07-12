import { BoloInterface } from "../interfaces/bolo.interface";

export class Bolo implements BoloInterface{
  constructor(public sabor: string,public peso: number) {}
}
