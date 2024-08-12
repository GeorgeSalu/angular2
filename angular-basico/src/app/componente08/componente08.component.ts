import { Component } from '@angular/core';

@Component({
  selector: 'app-componente08',
  standalone: true,
  imports: [],
  templateUrl: './componente08.component.html',
  styleUrl: './componente08.component.css'
})
export class Componente08Component {

  // variavel media
  media: number = 3;

  // vetor
  nomes: string[] = ['ralf', 'ana', 'danilo', 'camila']

  linguagem: string = 'html';
}