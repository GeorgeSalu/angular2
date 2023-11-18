import { Component } from '@angular/core';
import { NewComponet2Component } from '../new-componet-2/new-componet-2.component';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [NewComponet2Component],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss'
})
export class NewComponent {

}
