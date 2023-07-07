import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  clientes = [
    {
      nome: "alexandre",
      sexo: "m",
      idade: 21,
      salario: 1000
    },
    {
      nome: "roberto",
      sexo: "m",
      idade: 30,
      salario: 2000
    },
    {
      nome: "mauro",
      sexo: "f",
      idade: 40,
      salario: 3000
    },
    {
      nome: "claudia",
      sexo: "f",
      idade: 50,
      salario: 1020
    }
  ]

}
