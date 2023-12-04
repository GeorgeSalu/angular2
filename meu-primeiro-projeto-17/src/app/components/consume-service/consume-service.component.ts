import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumeServiceComponent implements OnInit {

  #apiService = inject(ApiService);

  public getTask = signal<null | Array<{
    id: string,
    title: string
  }>>(null);

  public getTask$ = this.#apiService.httpListTask$();

  ngOnInit(): void {
    this.getTask$.subscribe({
      next: (next) => {
        console.log(next);
        this.getTask.set(next)
      },
      error: (error) => console.log(error),
      complete: () => console.log('complete')
    })
  }

}
