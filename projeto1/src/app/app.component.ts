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
      idade: 21,
      salario: 1000
    },
    {
      nome: "roberto",
      sexo: "masculino",
      idade: 30,
      salario: 2000
    },
    {
      nome: "mauro",
      sexo: "feminino",
      idade: 40,
      salario: 3000
    },
    {
      nome: "claudia",
      sexo: "feminino",
      idade: 50,
      salario: 1020
    }
  ]

  constructor() { }


}
