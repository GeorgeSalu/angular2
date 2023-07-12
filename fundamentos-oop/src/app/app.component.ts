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
    let meuPrimeiraClasse = new MinhaPrimeiraClasse("Danilo", 30, "dev");
    let meuSegundaClasse = new MinhaPrimeiraClasse("Emerson", 20, "garcom");
    let meuTerceiroObjeto = new MinhaSegundaClasse("rafa", 30, "analista");

    meuPrimeiraClasse.setNome("juliano")
    console.log(meuTerceiroObjeto)
    console.log(meuTerceiroObjeto.showNome())

    console.log(meuSegundaClasse.mostarNome());
    console.log(meuPrimeiraClasse);
  }

}
