import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CategoriaService } from '../../service/categoria.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Categoria } from '../../models/categoria.mode';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['nome', 'descricao', 'editar', 'excluir'];
  dataSource = new MatTableDataSource<Categoria>();
  categorias: Categoria[] = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private categoriasService: CategoriaService,
              private router: Router){}

  ngOnInit(): void {
    this.buscarCategorias()
  }

  buscarCategorias() {
    this.categoriasService.getCategorias()
    .subscribe((categorias: Categoria[]) => {
      this.categorias = categorias
      this.dataSource.data = this.categorias;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  chamarEdicao(categoria: Categoria) {
    this.router.navigate(['categorias','editar', categoria.id])
  }

  excluir(id: number) {
    this.categoriasService.excluirCategoria(id)
    .subscribe(resposta => {
      this.buscarCategorias();
    })
  }

  novaCategoria() {
    this.router.navigate(["categorias", "nova-categoria"])
  }

}
