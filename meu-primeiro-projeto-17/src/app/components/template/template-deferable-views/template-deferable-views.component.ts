import { Component } from '@angular/core';
import { NewComponent } from '../../new-component/new-component.component';
import { Observable, delay, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-deferable-views',
  standalone: true,
  imports: [CommonModule, NewComponent],
  templateUrl: './template-deferable-views.component.html',
  styleUrl: './template-deferable-views.component.scss'
})
export class TemplateDeferableViewsComponent {

  public isTrue = false;

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3'
  ]).pipe(delay(5000));

}
