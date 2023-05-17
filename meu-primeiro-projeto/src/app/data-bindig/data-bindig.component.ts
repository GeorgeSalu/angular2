import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bindig',
  templateUrl: './data-bindig.component.html',
  styleUrls: ['./data-bindig.component.scss']
})
export class DataBindigComponent implements OnInit {

  public nome: string = "george";
  public idade: number = 29;
  public maisUm: number = 1;

  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://miro.medium.com/v2/resize:fit:720/format:webp/1*qgo4_MwETtxdspEqt12sNA.png";
  public imgTitle: string = "imagem angular";

  constructor() { }

  ngOnInit(): void {
  }

}
