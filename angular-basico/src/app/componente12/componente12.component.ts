import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente12',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente12.component.html',
  styleUrl: './componente12.component.css'
})
export class Componente12Component {

  // texto
  nome: string = 'ralf';

  // objeto
  obj: any = { 'nome': 'ralf', 'idade': 22 };

}
