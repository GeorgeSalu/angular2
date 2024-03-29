import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import { Entrada } from './models/entrada.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  meses = [
    { value: 0, viewValue: 'Janeiro'},
    { value: 1, viewValue: 'Fevereiro'},
    { value: 2, viewValue: 'Março'},
    { value: 3, viewValue: 'Abril'},
    { value: 4, viewValue: 'Maio'},
    { value: 5, viewValue: 'Junho'},
    { value: 6, viewValue: 'Julho'},
    { value: 7, viewValue: 'Agosto'},
    { value: 8, viewValue: 'Setembro'},
    { value: 9, viewValue: 'Outubro'},
    { value: 10, viewValue: 'Novembro'},
    { value: 11, viewValue: 'Dezembro'}
  ]

  entradas: any[] = [];
  saldo = 0;
  despesa = 0;
  receita = 0;

  formDashborad!: FormGroup;

  constructor(private dashboardService: DashboardService,
              private formaBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.criarFormulario()
  }

  criarFormulario() {
    this.formDashborad = this.formaBuilder.group({
      mes: ['', Validators.required],
      ano: ['', Validators.required]
    })
  }

  getEntradas() {

    this.entradas = [];
    this.saldo = 0;
    this.despesa = 0;
    this.receita = 0;

    const payload = {
      mes: this.formDashborad.controls['mes'].value + 1,
      ano: this.formDashborad.controls['ano'].value
    }

    this.dashboardService.getEntradas()
    .subscribe(entradas => {
      this.entradas = entradas;
      this.getReceitas()
      this.getDespesas()
      this.getSaldo()
    })
  }

  getReceitas() {
    this.entradas.forEach((entrada: Entrada) => {
      if(entrada.tipo === "receita") {
        this.receita += parseInt(entrada.valor);
      }
    })
  }

  getDespesas() {
    this.entradas.forEach((entrada: Entrada) => {
      if(entrada.tipo === "despesa") {
        this.despesa += parseInt(entrada.valor);
      }
    })
  }

  getSaldo() {
    this.saldo = this.receita - this.despesa;
  }

}
