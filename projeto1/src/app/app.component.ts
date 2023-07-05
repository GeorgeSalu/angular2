import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  title = null;

  clientes = [
    {
      nome: "alexandre",
      sexo: "masculino",
      idade: 21
    },
    {
      nome: "roberto",
      sexo: "masculino",
      idade: 30
    },
    {
      nome: "mauro",
      sexo: "feminino",
      idade: 40
    },
    {
      nome: "claudia",
      sexo: "feminino",
      idade: 50
    }
  ]

  constructor() { }


}
