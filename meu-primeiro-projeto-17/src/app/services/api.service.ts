import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public name = signal('george')
  constructor() { }
}
