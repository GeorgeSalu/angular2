import { IProduto } from "./produto.interface";

export interface ICarrinho {
  produtos: IProduto[];

  adicionarProduto(produto: IProduto): void;
  getProdutos(): IProduto[];
  calcularTotal(): number;
}
