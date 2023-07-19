import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../service/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../../models/categoria.mode';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{

  categoria!: Categoria;
  id:string = "";
  formCategoria!: FormGroup;
  rota: string = "";
  eUmNovoFormulario: boolean = false;

  constructor(private categoriasService: CategoriaService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder){}


  ngOnInit(): void {

    this.rota = this.activatedRoute.snapshot.url[0].path;
    this.criarFormulario();

    if(this.rota === "editar") {

      this.id = this.activatedRoute.snapshot.url[1].path;
      this.buscarCAtegoriaPeloId();

    } else {
      this.eUmNovoFormulario = true;
    }

  }

  buscarCAtegoriaPeloId() {
    this.categoriasService.getCategoriasPeloId(parseInt(this.id))
      .subscribe((categoria: Categoria) => {
        this.categoria = categoria;
        this.formCategoria.controls["nome"].setValue(categoria.nome);
        this.formCategoria.controls["descricao"].setValue(categoria.descricao)
      })
  }

  criarFormulario() {
    this.formCategoria = this.formBuilder.group({
      nome: ["", Validators.required],
      descricao: ["", Validators.required]
    })
  }

  salvarCategoria() {
    if(this.formCategoria.touched && this.formCategoria.dirty) {

      const payload: Categoria = {
        nome: this.formCategoria.controls['nome'].value,
        descricao: this.formCategoria.controls['descricao'].value
      }

      if(this.eUmNovoFormulario) {
        this.criarCategoria(payload)
      } else {
        payload.id = this.categoria.id;
        this.editarCategoria(payload)
      }

    }
  }

  editarCategoria(payload: Categoria) {
    this.categoriasService.alterarCategoria(payload)
    .subscribe(resposta => {
      // retornar a tela anterior
      this.router.navigate(['categorias']);
    })
  }

  criarCategoria(payload: Categoria) {
    this.categoriasService.criarCategoria(payload)
    .subscribe(resposta => {
      // retornar a tela anterior
      this.router.navigate(['categorias']);
    })
  }

}
