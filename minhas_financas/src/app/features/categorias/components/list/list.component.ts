import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CategoriaService } from '../../service/categoria.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface Categorias {
  nome: string;
  descricao: number;
  id: number;
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['nome', 'descricao'];
  dataSource = new MatTableDataSource<Categorias>();
  categorias: Categorias[] = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private categoriasService: CategoriaService){}

  ngOnInit(): void {
    this.categoriasService.getCategorias()
    .subscribe((categorias: Categorias[]) => {
      this.categorias = categorias
      this.dataSource.data = this.categorias;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
