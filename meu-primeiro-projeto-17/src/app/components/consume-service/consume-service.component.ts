import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { NewComponent } from '@components/new-component/new-component.component';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [CommonModule, NewComponent],
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

  ngOnInit(): void {
    this.#apiService.httpListTask$().subscribe({
      next: (next) => {
        console.log(next);
        this.getTask.set(next)
      },
      error: (error) => console.log(error),
      complete: () => console.log('complete')
    })
  }

}
