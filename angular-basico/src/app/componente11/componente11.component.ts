import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css'
})
export class Componente11Component {

  // objeto do formulario
  formulario = new FormGroup({
    nome: new FormControl(''),
    idade: new FormControl(null),
    cidade: new FormControl(''),
  })

}
