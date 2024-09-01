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

  seleciona(indice: number) {

    this.formulario.setValue({
      id: this.vetor[indice].id,
      nome: this.vetor[indice].nome,
      valor: this.vetor[indice].valor
    });

    this.btnCadastrar = false;

  }

}
