import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { concatMap } from 'rxjs';

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

  public getTaskList = this.#apiService.getTaskList;
  public getTaskId = this.#apiService.getTaskId;
  public getTaskIdError = this.#apiService.getTaskIdError;
  public getTaskCreateError = this.#apiService.getTaskCreateError;
  public getTaskUpdateError = this.#apiService.getTaskUpdateError;
  public getTaskDeleteError = this.#apiService.getTaskDeleteError;

  ngOnInit(): void {
    this.#apiService.httpTaskList$().subscribe();
    this.#apiService.httpTaskId$("ItNeQaaBl0nMRwOvP1Optn").subscribe();
  }

  public httpTaskCreate(title: string) {
    return this.#apiService
      .httpTaskCreate$(title)
      .pipe(concatMap(() => this.#apiService.httpTaskList$()))
      .subscribe();
  }

  public httpTaskUpdate(id: string, title: string) {
    return this.#apiService
      .httpTaskUpdate$(id, title)
      .pipe(concatMap(() => this.#apiService.httpTaskList$()))
      .subscribe();
  }

  public httpTaskDelete(id: string) {
    return this.#apiService
      .httpTaskDelete$(id)
      .pipe(concatMap(() => this.#apiService.httpTaskList$()))
      .subscribe();
  }

}
