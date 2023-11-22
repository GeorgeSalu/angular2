import { Component } from '@angular/core';
import { NewComponent } from '../../new-component/new-component.component';

@Component({
  selector: 'app-template-deferable-views',
  standalone: true,
  imports: [NewComponent],
  templateUrl: './template-deferable-views.component.html',
  styleUrl: './template-deferable-views.component.scss'
})
export class TemplateDeferableViewsComponent {

  public isTrue = false;

}
