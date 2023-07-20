import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/features/categorias/models/categoria.mode';
import { CategoriaService } from 'src/app/features/categorias/service/categoria.service';
import { EntradasService } from '../../service/entradas.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{

  tiposDeEntradas = [
    "Receita",
    "Despesa"
  ];

  statusDePagamento = [
    { value: true, descricao: "Pago" },
    { value: false, descricao: "Pendente" }
  ];

  categorias: Categoria[] = [];
  formEntradas!: FormGroup;

  constructor(private readonly categoriaService: CategoriaService,
              private formBuilder:FormBuilder,
              private readonly entradaService: EntradasService) {}

  ngOnInit(): void {
    this.criarFromulario()
    this.buscarCategorias()
  }

  buscarCategorias() {
    this.categoriaService.getCategorias()
      .subscribe((categorias: Categoria[]) => {
        this.categorias = categorias;
      })
  }

  criarFromulario() {
    this.formEntradas = this.formBuilder.group({
      nome: ["", Validators.required],
      valor: ["", Validators.required],
      categoriaId: ["", Validators.required],
      pago: [true, Validators.required],
      tipo: ["Despesa", Validators.required],
      data: [new Date(), Validators.required],
    })
  }

  salvarEntrada() {
    this.entradaService.criarEntrada(this.formEntradas.getRawValue())
    .subscribe(resposta => {
      console.log("ok")
    })
  }

}
