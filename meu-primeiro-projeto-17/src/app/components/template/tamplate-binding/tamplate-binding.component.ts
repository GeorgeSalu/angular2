import { Component } from '@angular/core';

@Component({
  selector: 'app-tamplate-binding',
  standalone: true,
  imports: [],
  templateUrl: './tamplate-binding.component.html',
  styleUrl: './tamplate-binding.component.scss'
})
export class TamplateBindingComponent {

  public name = 'angular 17';
  public age = 32;
  public condition = this.age > 1 ? 'teste' : 'teste 2'
  
  public sum(val1: number, val2: number) {
    return val1 + val2;
  }

}
