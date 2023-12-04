import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

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

  public httpListTask$(): Observable<Array<ITask>> {
    return this.#http.get<Array<ITask>>(this.#url())
  }


}
