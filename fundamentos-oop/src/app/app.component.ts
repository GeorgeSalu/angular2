import { Component, OnInit } from '@angular/core';
import { MeuPrimeiroComponentComponent } from './meu-primeiro-component/meu-primeiro-component.component';
import { MinhaPrimeiraClasse } from './fundamentos/classes/minhaPrimeiraClasse';
import { MinhaSegundaClasse } from './fundamentos/classes/minhaSegundaClasse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fundamentos-oop';


  ngOnInit(): void {
    let meuPrimeiraObjeto = new MinhaPrimeiraClasse("Danilo", 30, "dev");
    let meuSegundaObjeto = new MinhaPrimeiraClasse("Emerson", 20, "garcom");
    let meuTerceiroObjeto = new MinhaSegundaClasse("rafa", 30, "analista");

    console.log(meuPrimeiraObjeto.mostarNome)
  }

}
