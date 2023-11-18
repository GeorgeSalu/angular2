import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <!--  <router-outlet></router-outlet> -->
    <h1>Curso de angular</h1>
    <h2>components</h2>
  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-17';
}
