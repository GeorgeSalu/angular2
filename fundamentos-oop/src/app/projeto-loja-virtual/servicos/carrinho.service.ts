import { Injectable } from '@angular/core';
import { Produto } from '../modelos/produto';
import { CarrinhoDeCompras } from '../modelos/carrinhoDeCompras';
import { IProduto } from '../interface/produto.interface';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private carrinho: CarrinhoDeCompras = new CarrinhoDeCompras();

  constructor() { }

  adicionarProduto(produto: Produto): void {
    this.carrinho.adicionarProduto(produto);
  }

  getProdutos(): IProduto[] {
    return this.carrinho.getProdutos();
  }

  getTotal(): number {
    return this.carrinho.calcularTotal();
  }

}
