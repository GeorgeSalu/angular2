import { Component, OnInit } from '@angular/core';
import { MeuPrimeiroComponentComponent } from './meu-primeiro-component/meu-primeiro-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fundamentos-oop';


  ngOnInit(): void {
    let meuPrimeiroComponent = new MeuPrimeiroComponentComponent();

    console.log(meuPrimeiroComponent)
  }

}
