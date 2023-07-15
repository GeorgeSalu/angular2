import { IProduto } from "../interface/produto.interface";
import { ITransacao } from "../interface/transacao.interface";

export class Transacao implements ITransacao {
  constructor(public produtos: IProduto[], public total: number, public data: Date){}
}
