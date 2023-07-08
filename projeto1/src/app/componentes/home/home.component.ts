import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Pessoa {
  nome: string;
  idade: number;
  sexo: string;
  salario: string;
}

export interface Pessoas extends Array<Pessoa>{}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  title = null;

  clientes: Pessoas = [
    {
      nome: "roberto",
      sexo: "m",
      idade: 33,
      salario: "100"
    }
  ]

  displayedColumns: string[] = ['nome', 'sexo', 'idade', 'salario'];
  dataSource !: MatTableDataSource<any>;
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.clientes);
  }

}
