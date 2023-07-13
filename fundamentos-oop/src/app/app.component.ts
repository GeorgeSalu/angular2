import { Component, OnInit } from '@angular/core';
import { ClienteNormal } from './modelos/ClienteNormal';
import { QuartoSimples } from './modelos/quartoSimples';
import { Reserva } from './modelos/reserva';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fundamentos-oop';


  ngOnInit(): void {
    let cliente = new ClienteNormal("joao", "normal");
    let quarto = new QuartoSimples();
    let reserva = new Reserva(cliente, quarto, 100);

    console.log(reserva)

  }

}
