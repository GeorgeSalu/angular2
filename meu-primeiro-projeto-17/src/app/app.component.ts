import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent],
  styles: [`
    h1 {
      color: red
    }
  `],
  template: `
    <!--  <router-outlet></router-outlet> -->
    <h1>Curso de angular</h1>
    <div class="theme-red">
      <app-new-component />
    </div>
  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-17';
}
