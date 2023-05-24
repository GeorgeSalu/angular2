import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public listComidas: Array<{comida: string, preco: string}> = [
    {comida: "x-salada", preco: "r$ 10,00"},
    {comida: "x-bacon", preco: "r$ 11,00"},
    {comida: "coxinha", preco: "r$ 13,00"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
