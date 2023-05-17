import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bindig',
  templateUrl: './data-bindig.component.html',
  styleUrls: ['./data-bindig.component.scss']
})
export class DataBindigComponent implements OnInit {

  public nome: string = "george";
  public idade: number = 29;

  constructor() { }

  ngOnInit(): void {
  }

}
