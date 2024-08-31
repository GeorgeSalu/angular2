import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  // url da api
  url: string = "http://localhost:3000/produtos"

  // primeiro metodo a ser executado quando referenciada a clase de servico
  constructor(private http: HttpClient) { }
}
