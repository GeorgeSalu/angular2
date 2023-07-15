import { IProduto } from "./produto.interface";

export interface ITransacao {
  produtos: IProduto[];
  total: number;
  data: Date;
}
