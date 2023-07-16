import { Component, OnInit } from '@angular/core';
import { IProduto } from '../../interface/produto.interface';
import { ITransacao } from '../../interface/transacao.interface';
import { CarrinhoService } from '../../servicos/carrinho.service';
import { TransacaoService } from '../../servicos/transacao.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  produtosDoCarrinho: IProduto[] = [];
  transacoes: ITransacao[] =[];

  constructor(
    private carrinhoService: CarrinhoService,
    private transacaoService: TransacaoService
  ){}

  ngOnInit(): void {
    this.produtosDoCarrinho = this.carrinhoService.getProdutos();
    this.transacoes = this.transacaoService.getTransacoes();
  }

  get getTransacoes(): ITransacao[] {
    return this.transacoes;
  }

}
