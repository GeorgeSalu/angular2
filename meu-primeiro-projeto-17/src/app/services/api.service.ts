import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, shareReplay, tap } from 'rxjs';

interface ITask {
  id: string,
  title: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // novo
  public name = signal('george')

  // antigo
  public name$ = new BehaviorSubject("george");

  #http = inject(HttpClient)
  #url = signal(environment.apiTask);

  #setTaskList = signal<ITask[] | null>(null);
  get getTaskList() {
    return this.#setTaskList.asReadonly();
  }

  public httpTaskList$(): Observable<ITask[]> {
    return this.#http.get<ITask[]>(this.#url()).pipe(
      shareReplay(),
      tap((res) => this.#setTaskList.set(res))
    )
  }

  #setTaskId = signal<ITask | null>(null);
  get getTaskId() {
    return this.#setTaskId.asReadonly();
  }

  public httpTaskId$(id: string): Observable<ITask> {
    return this.#http.get<ITask>(`${this.#url()}/${id}`).pipe(
      shareReplay(),
      tap((res) => this.#setTaskId.set(res))
    )
  }

  #setTaskCreate = signal<ITask | null>(null);
  get getTaskCreate() {
    return this.#setTaskId.asReadonly();
  }

  public httpTaskCreate$(title: string): Observable<ITask> {
    return this.#http.post<ITask>(this.#url(), {title}).pipe(
      shareReplay(),
      tap((res) => this.#setTaskCreate.set(res))
    )
  }


}
