import { Component, OnInit } from '@angular/core';
import { IProduto } from '../../interface/produto.interface';
import { CarrinhoService } from '../../servicos/carrinho.service';
import { TransacaoService } from '../../servicos/transacao.service';
import { Transacao } from '../../modelos/transacao';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  produtosSelecionados: IProduto[] = [];
  compraFinalizada = false;

  constructor(
    private carrinhoService: CarrinhoService,
    private transacaoService: TransacaoService
  ){}

  ngOnInit(): void {
    this.produtosSelecionados = this.carrinhoService.getProdutos();
  }

  calcularTotal(): number {
    return this.carrinhoService.getTotal();
  }

  finalizarCompra(): void {
    let total = this.calcularTotal();
    let data = new Date();
    let transacao = new Transacao(this.produtosSelecionados, total, data);
    this.transacaoService.adicionaTransacao(transacao);
  }

}
