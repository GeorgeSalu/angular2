import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { IProduto } from '../../interface/produto.interface';
import { Produto } from '../../modelos/produto';
import { CarrinhoService } from '../../servicos/carrinho.service';
import { UsuarioService } from '../../servicos/usuario.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  exibirCarrinho = false;
  usuario!: Usuario;

  produtos: IProduto[] = [
    new Produto(1, "Galaxy", "Samsung Galaxy A14 4G (Exynos) Dual SIM 128 GB black 4 GB RAM", "https://m.media-amazon.com/images/I/61iHMGQfv4L._AC_SX522_.jpg", 2000),
    new Produto(2, "Notebook", "Lenovo 82MD0007BR IdeaPad 3i i5 - Notebook-1135G7 8GB 256GB SSD Placa de Vídeo Intel Iris Xe Windows 11 15.6', Cinza", "https://m.media-amazon.com/images/I/41tQcIInuAL._AC_.jpg", 1200),
    new Produto(3, "Geladeira", "Geladeira Panasonic Frost Free 425L A+++ Titanio - NR-BB53PV3T 220v", "https://m.media-amazon.com/images/I/51LInJAZgkL.__AC_SX342_SY445_QL70_ML2_.jpg", 2200),
  ]

  constructor(private carrinhoService: CarrinhoService,
              private usuarioService: UsuarioService){}


  adicionarAoCarrinho(produto: IProduto): void {
    this.carrinhoService.adicionarProduto(produto);
  }

  ngOnInit(): void {
    this.usuario = this.usuarioService.getUsuario();
    console.log(this.produtos);
  }

  abrirCarrinho(): void {
    this.exibirCarrinho = true;
  }

}
