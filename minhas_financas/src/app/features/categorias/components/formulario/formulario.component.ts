import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../service/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorias } from '../../models/categoria.mode';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{

  categoria!: Categorias;
  id:string = "";
  formCategoria!: FormGroup;

  constructor(private categoriasService: CategoriaService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder){}


  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.url[1].path;
    this.criarFormulario();
    this.categoriasService.getCategoriasPeloId(parseInt(this.id))
      .subscribe((categoria: Categorias) => {
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

}
