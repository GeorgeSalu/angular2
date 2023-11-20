import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TamplateBindingComponent } from './components/template/tamplate-binding/tamplate-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent, TamplateBindingComponent
          ,TemplateVariablesComponent],
  styles: [`
    h1 {
      color: red
    }
  `],
  template: `
    <!--  <router-outlet></router-outlet> -->
    <h1>Curso de angular</h1>
    <app-tamplate-binding />
    <app-template-variables />
  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-17';
}
