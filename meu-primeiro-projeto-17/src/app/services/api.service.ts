import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // novo
  public name = signal('george')

  // antigo
  public name$ = new BehaviorSubject("george");

  constructor() { }
}
