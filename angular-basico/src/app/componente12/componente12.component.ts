import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaPipe } from '../pipe/media.pipe';

@Component({
  selector: 'app-componente12',
  standalone: true,
  imports: [CommonModule, MediaPipe],
  templateUrl: './componente12.component.html',
  styleUrl: './componente12.component.css'
})
export class Componente12Component {

  // texto
  nome: string = 'ralf';

  // objeto
  obj: any = { 'nome': 'ralf', 'idade': 22 };

  // vetor de objetos
  alunos: any = [
    { 'nome': 'ana', 'nota1': 8, 'nota2': 9 },
    { 'nome': 'julio', 'nota1': 7, 'nota2': 8 },
    { 'nome': 'leticia', 'nota1': 3, 'nota2': 2 },
    { 'nome': 'ricardo', 'nota1': 7, 'nota2': 7 },
  ]

}
