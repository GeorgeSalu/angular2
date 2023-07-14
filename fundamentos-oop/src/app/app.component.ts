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
  title = 'fundamentos-oop';

  cliente = {nome: ""};
  tipoCliente : string = "normal";
  quarto !: Quarto;
  tipoQuarto = "";
  quantidadeDias !: number;

  constructor(public hotelService: HotelService) {}

  criaCliente(): void {
    if(this.tipoCliente === "normal") {
      this.cliente = new ClienteNormal(this.cliente.nome, "Normal");
      this.tipoQuarto = "simples";
    } else if(this.tipoCliente === "vip" ) {
      this.cliente = new ClienteVIP(this.cliente.nome, "VIP")
      this.tipoQuarto = "de luxo";
    }

    this.hotelService.setCliente(this.cliente);
    this.escolherQuarto();
  }

  ngOnInit(): void {

  }

  escolherQuarto(): void {
    if(this.tipoQuarto === "simples") {
      this.quarto = new QuartoSimples();
    } else if(this.tipoQuarto === "de luxo") {
      this.quarto = new QuartoLuxo();
    }

    this.hotelService.setQuarto(this.quarto);
  }

  fazerRezerva(): void {
    this.criaCliente();

    let cliente = this.hotelService.getCliente();
    let quarto = this.hotelService.getQuarto();
    let reserva = new Reserva(cliente, quarto, this.quantidadeDias);

    this.hotelService.addReserva(reserva);

    console.log(this.hotelService.getReservas())
  }



}
