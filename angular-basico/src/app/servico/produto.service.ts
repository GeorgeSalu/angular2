import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../modelo/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  // url da api
  url: string = "http://localhost:3000/produtos"

  // primeiro metodo a ser executado quando referenciada a clase de servico
  constructor(private http: HttpClient) { }

  // metodo para selecionar produtos
  selecionar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }

  // metodo para cadastrar produtos
  cadastrar(obj: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.url, obj);
  }

}
