import { Component, OnInit } from '@angular/core';
import { Quarto } from './projeto-reserva-hoteis/interfaces/quarto.interface';
import { HotelService } from './projeto-reserva-hoteis/servicos/hotel.service';
import { ClienteNormal } from './projeto-reserva-hoteis/modelos/ClienteNormal';
import { ClienteVIP } from './projeto-reserva-hoteis/modelos/clienteVIP';
import { QuartoSimples } from './projeto-reserva-hoteis/modelos/quartoSimples';
import { QuartoLuxo } from './projeto-reserva-hoteis/modelos/quartoLuxo';
import { Reserva } from './projeto-reserva-hoteis/modelos/reserva';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  reservaHoteis: boolean = false;
  contaBancaria: boolean = false;

  constructor() {}

  ngOnInit(): void { }

  reservaHoteisFunc(): void {
    this.reservaHoteis = !this.reservaHoteis;
    this.contaBancaria = false;
  }

  contaBancariaFunc(): void {
    this.contaBancaria = !this.contaBancaria;
    this.reservaHoteis = false;
  }

}
