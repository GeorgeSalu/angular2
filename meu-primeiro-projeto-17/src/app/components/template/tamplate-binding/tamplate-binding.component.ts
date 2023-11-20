import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-tamplate-binding',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './tamplate-binding.component.html',
  styleUrl: './tamplate-binding.component.scss'
})
export class TamplateBindingComponent {

  public name = 'angular 17';
  public age = 32;
  public condition = this.age > 1 ? 'teste' : 'teste 2'
  public isDisabled = false;
  
  public sum() {
    return this.age++;
  }

  public sub() {
    return this.age--;
  }

  public onKeyDown(event: Event) {
    return console.log(event);
  }

  public onMouseMove(event: MouseEvent) {
    return console.log({
      clietX: event.clientX,
      clietY: event.clientY
    });
  }

}
