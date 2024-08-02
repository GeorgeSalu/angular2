import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, catchError, Observable, shareReplay, tap, throwError } from 'rxjs';

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
    const headers = new HttpHeaders().set('x-vida-full-stack', 'dev');
    const params = new HttpParams().set('page', 1);

    this.#setTaskList.set(null);
    return this.#http.get<ITask[]>(this.#url(), { headers, params }).pipe(
      tap((res) => this.#setTaskList.set(res))
    )
  }

  #setTaskId = signal<ITask | null>(null);
  get getTaskId() {
    return this.#setTaskId.asReadonly();
  }

  #setTaskIdError = signal<ITask | null>(null);
  get getTaskIdError() {
    return this.#setTaskIdError.asReadonly();
  }

  public httpTaskId$(id: string): Observable<ITask> {
    this.#setTaskIdError.set(null);
    this.#setTaskId.set(null);
    return this.#http.get<ITask>(`${this.#url()}/${id}`).pipe(
      tap((res) => this.#setTaskId.set(res)),
      catchError((error: HttpErrorResponse) => {
        this.#setTaskIdError.set(error.error.message)
        return throwError(() => error)
      })
    )
  }

  #setTaskCreateError = signal<ITask | null>(null);
  get getTaskCreateError() {
    return this.#setTaskCreateError.asReadonly();
  }

  public httpTaskCreate$(title: string): Observable<ITask> {
    this.#setTaskCreateError.set(null);
    return this.#http.post<ITask>(this.#url(), { title }).pipe(
      catchError((error: HttpErrorResponse) => {
        this.#setTaskCreateError.set(error.error.message);
        return throwError(() => error);
      })
    )
  }

  #setTaskUpdateError = signal<ITask | null>(null);
  get getTaskUpdateError() {
    return this.#setTaskUpdateError.asReadonly();
  }

  public httpTaskUpdate$(id: string, title: string): Observable<ITask> {
    this.#setTaskUpdateError.set(null);
    return this.#http.patch<ITask>(`${this.#url()}/${id}`, { title }).pipe(
      catchError((error: HttpErrorResponse) => {
        this.#setTaskUpdateError.set(error.error.message);
        return throwError(() => error);
      })
    )
  }


  #setTaskDeleteError = signal<ITask | null>(null);
  get getTaskDeleteError() {
    return this.#setTaskDeleteError.asReadonly();
  }
  public httpTaskDelete$(id: string): Observable<void> {
    this.#setTaskDeleteError.set(null)
    return this.#http
      .delete<void>(`${this.#url()}/${id}`, {})
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.#setTaskDeleteError.set(error.error.message);
          return throwError(() => error);
        })
      );
  }


}
