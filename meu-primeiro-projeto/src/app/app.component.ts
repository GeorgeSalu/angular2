import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-data-bindig></app-data-bindig>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {}

}
