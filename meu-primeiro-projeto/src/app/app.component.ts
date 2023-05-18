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
  <app-new-component></app-new-component>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {}

}
