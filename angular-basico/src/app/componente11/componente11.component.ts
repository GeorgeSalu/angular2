import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css'
})
export class Componente11Component {

  // objeto do formulario
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)]),
  })

  // visibilidade dos botoes
  btnCadastrar: boolean = true;

  //vetor
  vetor: Pessoa[] = [];

  // armazenar indice da pessoa selecionada
  indice: number = -1;

  // funcao de cadastro
  cadastrar() {
    // cadastro do vetor
    this.vetor.push(this.formulario.value as Pessoa)

    // limpeza dos inputs
    this.formulario.reset();

    // visualizacao via console
    // console.table(this.vetor)
  }

  // funcao de selecao
  selecionar(indice: number) {

    // atribuir o indice da pessoa
    this.indice = indice;

    // atribuir os dados da pessoa no formulario
    this.formulario.setValue({
      nome: this.vetor[indice].nome,
      idade: this.vetor[indice].idade,
      cidade: this.vetor[indice].cidade
    });

    //visibilidade dos botoes
    this.btnCadastrar = false
  }

  // funcao de alteracao
  alterar() {
    // alterar vetor
    this.vetor[this.indice] = this.formulario.value as Pessoa;

    //limpar os inputs
    this.formulario.reset();

    //visibilidade dos botoes
    this.btnCadastrar = true;
  }

  // funcao de remoçao
  remover() {
    // removendo pessoa do vetor
    this.vetor.splice(this.indice, 1);

    //limpeza dos inputs
    this.formulario.reset();

    // visibilidade dos botoes
    this.btnCadastrar = true;
  }

}
