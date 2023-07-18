import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  private readonly httpCliente!: HttpClient;

  private apiBase = "http://localhost:3000";

  constructor(private readonly injector: Injector) {
    if(injector === null || injector === undefined) {
      throw new Error("injector não pode ser nulo");
    }
    this.httpCliente = injector.get(this.httpCliente);
  }

  public httpGet(endpoint: string): Observable<any> {
    return this.httpCliente.get(`${this.apiBase}${endpoint}`);
  }

  public httpPost(endpoint: string, dados: any): Observable<any> {
    return this.httpCliente.post(`${this.apiBase}${endpoint}`, dados);
  }

  public httpPut(endpoint: string, dados: any): Observable<any> {
    return this.httpCliente.get(`${this.apiBase}${endpoint}`, dados);
  }

  public httpDelete(endpoint: string): Observable<any> {
    return this.httpCliente.get(`${this.apiBase}${endpoint}`);
  }
}
