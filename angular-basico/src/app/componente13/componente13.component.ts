import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente13',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './componente13.component.html',
  styleUrl: './componente13.component.css'
})
export class Componente13Component implements OnInit {

  // vetor 
  vetor: Produto[] = [];

  // visibilidade dos botoes
  btnCadastrar: boolean = true;

  //objeto de formulario
  formulario = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(''),
    valor: new FormControl(null)
  });

  // construtor
  constructor(private servico: ProdutoService) { }

  ngOnInit(): void {
    this.selecionar()
  }

  // metodo para selecionar todos os produtos
  selecionar() {
    this.servico.selecionar()
      .subscribe(retorno => {
        this.vetor = retorno
      })
  }

  // metodo para cadastrar produtos
  cadastrar() {
    this.servico.cadastrar(this.formulario.value as Produto)
      .subscribe(retorno => {
        this.vetor.push(retorno);
        this.formulario.reset();
      })
  }

  // metodo para selecionar um produto especifico
  selecionarProduto(indice: number) {

    this.formulario.setValue({
      id: this.vetor[indice].id,
      nome: this.vetor[indice].nome,
      valor: this.vetor[indice].valor
    });

    this.btnCadastrar = false;

  }

  // metodo para alterar produtos
  alterar() {
    this.servico.alterar(this.formulario.value as Produto)
      .subscribe(retorno => {

        // obtendo o indice do objeto alterado
        let indiceAlterado = this.vetor.findIndex(obj => {
          return this.formulario.value.id === obj.id
        })

        // altera o vetor
        this.vetor[indiceAlterado] = retorno;

        // limpa o formulario
        this.formulario.reset();

        // visibilidade de botoes
        this.btnCadastrar = true;

      })
  }

  // metodo para remover produtos
  remover() {

    this.servico.remover(this.formulario.value.id)
      .subscribe(() => {

        // obter o indice do vetor que sera removido
        let indiceRemovido = this.vetor.findIndex(obj => {
          return obj.id === this.formulario.value.id;
        })

        // remover objeto do vetor
        this.vetor.splice(indiceRemovido, 1);

        //limpar formulario
        this.formulario.reset()

        // visibilidade dos botoes
        this.btnCadastrar = true;

      })

  }

}
