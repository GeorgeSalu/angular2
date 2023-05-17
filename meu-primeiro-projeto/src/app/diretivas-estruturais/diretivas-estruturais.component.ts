import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;

  public lista: Array<{nome: string, idade: number}> = [
    {nome: "angular", idade: 29},
    {nome: "jose", idade: 23},
    {nome: "isabel", idade: 1}
  ];

  public nome: string = "angular"

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if(this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000);
  }

  public onClick() {
    if(this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAddList() {
    this.lista.push({nome: "nay", idade: 21});
  }

  public onClickEventList(event: number) {
    this.lista.splice(event, 1);
  }

}
