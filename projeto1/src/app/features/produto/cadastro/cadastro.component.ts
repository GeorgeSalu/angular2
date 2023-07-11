import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../models/produto.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{

  id!: string;
  produto!: Produto;
  rota: string = "";
  isNovoProduto: boolean = false;
  tituloPagina: string = "";

  formCadastroProduto!: FormGroup

  constructor(private produtoService: ProdutoService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.rota = this.activatedRoute.snapshot.url[0].path;
    this.criarFormulario();

    if(this.rota === "editar-produto") {

      this.id = this.activatedRoute.snapshot.url[1].path;

      this.produtoService.getProdutoPeloId(this.id).subscribe((produto: Produto) => {
        this.produto = produto;
        this.formCadastroProduto.controls['nome'].setValue(this.produto.nome);
        this.formCadastroProduto.controls['descricao'].setValue(this.produto.descricao);
        this.formCadastroProduto.controls['estoque'].setValue(this.produto.estoque);
        this.formCadastroProduto.controls['preco'].setValue(this.produto.preco);
        this.tituloPagina = "editar produto"
      })
    } else {
      this.isNovoProduto = true;
      this.tituloPagina = "novo produto"
    }

  }

  criarFormulario() {
    this.formCadastroProduto = this.formBuilder.group({
      nome: "",
      descricao: "",
      preco: "",
      estoque: 0
    })
  }

  salvarProduto() {
    const produtoParaSalvar: Produto = {
      id: parseInt(this.id),
      nome: this.formCadastroProduto.controls['nome'].value,
      descricao: this.formCadastroProduto.controls['descricao'].value,
      estoque: this.formCadastroProduto.controls['estoque'].value,
      preco: this.formCadastroProduto.controls['preco'].value,
    }

    if(this.isNovoProduto) {
      this.criarProduto(produtoParaSalvar);
    }else {
      produtoParaSalvar.imagemUrl = this.produto.imagemUrl;
      this.atualizarProduto(produtoParaSalvar);
    }

  }

  atualizarProduto(produtoParaSalvar: Produto) {
    this.produtoService.atualizarProduto(produtoParaSalvar).subscribe(response => {
      this.router.navigate(["produto", "listagem"]);
    })
  }

  criarProduto(produtoParaSalvar: Produto) {
    this.produtoService.criarProduto(produtoParaSalvar).subscribe(response => {
      this.router.navigate(["produto", "listagem"]);
    })
  }

}
