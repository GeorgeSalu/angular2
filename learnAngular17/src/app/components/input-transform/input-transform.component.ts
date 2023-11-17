import { Component, Input } from '@angular/core';
import { USer } from '../../app.component';

@Component({
  selector: 'app-input-transform',
  standalone: true,
  imports: [],
  templateUrl: './input-transform.component.html',
})
export class InputTransformComponent {

  @Input({required: true})
  public user!: USer;

}
