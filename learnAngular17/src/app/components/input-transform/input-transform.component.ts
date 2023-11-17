import { Component, Input } from '@angular/core';
import { USer } from '../../app.component';

function setUserNameToUpperCase(user: USer): USer {
  return {
    ...user,
    name: user.name.toUpperCase()
  }
}

@Component({
  selector: 'app-input-transform',
  standalone: true,
  imports: [],
  templateUrl: './input-transform.component.html',
})
export class InputTransformComponent {

  @Input({required: true, transform: setUserNameToUpperCase})
  public user!: USer;

}
