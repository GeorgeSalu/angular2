import { ICarrinho } from "../interface/carrinho.interfce";
import { IProduto } from "../interface/produto.interface";

export class CarrinhoDeCompras implements ICarrinho {
  produtos: IProduto[] = [];

  adicionarProduto(produto: IProduto): void {
    this.produtos.push(produto);
  }

  getProdutos(): IProduto[] {
    return this.produtos;
  }

  calcularTotal(): number {
    return this.produtos.reduce((total, produto) => total + produto.preco, 0);
  }
}
