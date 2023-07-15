import { IProduto } from "../interface/produto.interface";

export class Produto implements IProduto {
  constructor(
    public id: number,public nome: string,public descricao: string,public imagem: string, public preco: number ){}
}
