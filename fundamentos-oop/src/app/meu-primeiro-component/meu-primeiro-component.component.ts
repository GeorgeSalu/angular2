import { Component, OnInit } from '@angular/core';
import { BoloInterface } from '../fundamentos/interfaces/bolo.interface';
import { Bolo } from '../fundamentos/classes/bolo';

@Component({
  selector: 'app-meu-primeiro-component',
  templateUrl: './meu-primeiro-component.component.html',
  styleUrls: ['./meu-primeiro-component.component.css']
})
export class MeuPrimeiroComponentComponent implements OnInit{

  meuAtributo!: string;
  bolo !: BoloInterface;

  meuMetodo(): void {

  }

  ngOnInit(): void {
    console.log("componente meu-primeiro-componente");

    this.bolo = new Bolo("laranja", 200)
  }


}
