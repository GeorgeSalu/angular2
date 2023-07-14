import { Component } from '@angular/core';
import { Quarto } from '../interfaces/quarto.interface';
import { ClienteNormal } from '../modelos/ClienteNormal';
import { HotelService } from '../servicos/hotel.service';
import { ClienteVIP } from '../modelos/clienteVIP';
import { QuartoSimples } from '../modelos/quartoSimples';
import { QuartoLuxo } from '../modelos/quartoLuxo';
import { Reserva } from '../modelos/reserva';

@Component({
  selector: 'app-reserva-hoteis',
  templateUrl: './reserva-hoteis.component.html',
  styleUrls: ['./reserva-hoteis.component.css']
})
export class ReservaHoteisComponent {

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
