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

  constructor(private categoriasService: CategoriaService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder){}


  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.url[1].path;
    this.criarFormulario();
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

      const payload = {
        id: this.categoria.id,
        nome: this.formCategoria.controls['nome'].value,
        descricao: this.formCategoria.controls['descricao'].value
      }

      this.categoriasService.alterarCategorias(payload)
        .subscribe(resposta => {

          this.router.navigate(['categorias']);

        })

    }
  }

}
