import { Component, OnInit } from '@angular/core';
import { Quarto } from './interfaces/quarto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fundamentos-oop';

  cliente = {nome: ""};
  tipoCliente : string = "normal";
  quarto !: Quarto;
  tipoQuarto = "";
  quantidadeDias !: number;


  ngOnInit(): void {

  }

  fazerRezerva(): void {
    console.log(this.cliente.nome, this.tipoCliente, this.tipoQuarto, this.quantidadeDias)
  }

}
