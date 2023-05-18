import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--
  <app-diretivas-atributos>
    <h1>Aulas diretivas atributos</h1>
    <hr>
  </app-diretivas-atributos>
  -->
  <app-input [contador]="addValue"></app-input>
  <button (click)="add()">Add</button>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  public addValue: number = 0;

  constructor(){}

  ngOnInit(): void {}

  public add() {
    this.addValue += 1;
  }

}
