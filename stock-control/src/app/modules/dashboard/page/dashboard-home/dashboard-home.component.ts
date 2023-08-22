import { GetAllProductsResponse } from './../../../../models/interfaces/products/response/GetAllProductsResponse';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: []
})
export class DashboardHomeComponent implements OnInit {

  public productsList: Array<GetAllProductsResponse> = [];

  constructor(private productService: ProductsService,
              private messageService: MessageService) {}

  ngOnInit(): void {
    this.getProductsDatas();
  }

  getProductsDatas(): void {
    this.productService
      .getAllProducts()
      .subscribe({
        next: (response) => {
          if(response.length > 0) {
            this.productsList = response;
            console.log('dados dos produtos', this.productsList)
          }
        },
        error: (err) => {
          console.log(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao buscar produtos',
            life: 2500,
          })
        }
      })
  }

}
