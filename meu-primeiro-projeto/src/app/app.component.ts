import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--
  <app-diretivas-atributos>
    <h1>Aulas diretivas atributos</h1>
    <hr>
  </app-diretivas-atributos>
  <ng-template [ngIf]="getDados">
    <h1>{{ getDados.nome }}</h1>
    <h1>{{ getDados.idade }}</h1>
  </ng-template>

  <app-output (enviarDados)="setDados($event)"></app-output>
  -->
  <app-food-list></app-food-list>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  public addValue: number = 0;

  public getDados: {nome: string, idade: number} | undefined;

  constructor(){}

  ngOnInit(): void {}

  public add() {
    this.addValue += 1;
  }

  public setDados(event: {nome: string, idade: number}) {
    this.getDados = event;
  }

}
