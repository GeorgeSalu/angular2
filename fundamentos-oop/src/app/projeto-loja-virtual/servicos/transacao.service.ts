import { Injectable } from '@angular/core';
import { ITransacao } from '../interface/transacao.interface';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  transacoes: ITransacao[] = [];

  constructor() { }

  adicionaTransacao(transacao: ITransacao) {
    this.transacoes.push(transacao);
  }

  getTransacoes(): ITransacao[] {
    return this.transacoes;
  }

}
