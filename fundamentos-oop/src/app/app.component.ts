import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  reservaHoteis: boolean = false;
  contaBancaria: boolean = false;
  lojaVirtual: boolean = false;

  constructor() {}

  ngOnInit(): void { }

  reservaHoteisFunc(): void {
    this.reservaHoteis = !this.reservaHoteis;
    this.contaBancaria = false;
    this.lojaVirtual = false;
  }

  contaBancariaFunc(): void {
    this.contaBancaria = !this.contaBancaria;
    this.reservaHoteis = false;
    this.lojaVirtual = false;
  }

  lojaVirtualFunc():  void {
    this.lojaVirtual = !this.lojaVirtual;
    this.contaBancaria = false;
    this.reservaHoteis = false;
  }

}
