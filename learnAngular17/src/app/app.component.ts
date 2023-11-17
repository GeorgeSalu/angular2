import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'learnAngular17';

  userDatasList: Array<{
    name: string;
    age: number;
    profession: string;
    id: string;
  }> = [
    { age: 20, name: 'marcos', profession: 'software developer', id: '123' },
    { age: 30, name: 'marcelo', profession: 'software developer', id: '456' },
    { age: 40, name: 'carlos', profession: 'scrum master', id: '789' },
    { age: 50, name: 'maria', profession: 'ux desings', id: '123' },
  ]

}
