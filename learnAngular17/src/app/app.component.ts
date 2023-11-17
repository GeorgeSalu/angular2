import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InputTransformComponent } from './components/input-transform/input-transform.component';
import { of } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

export interface USer {
  name: string;
  age: number;
  profession: string;
  id: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputTransformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  
  destroyedRef = inject(DestroyRef)
  
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
  userDatas$ = of(this.userDatasList);


  ngOnInit(): void {
    this.userDatas$
      .pipe(
        takeUntilDestroyed(this.destroyedRef)
      )
      .subscribe({
        next: (response) => console.log('user datas in obsevable', response)
      })
  }
  
}
