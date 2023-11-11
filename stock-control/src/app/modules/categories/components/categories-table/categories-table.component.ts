import { Component, Input } from '@angular/core';
import { GetAllCategoriesResponse } from 'src/app/models/interfaces/categories/response/GetCategoriesResponse';

@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  styleUrls: []
})
export class CategoriesTableComponent {

  @Input()
  public categories: Array<GetAllCategoriesResponse> = [];
  public categorySelected!: GetAllCategoriesResponse;
}
