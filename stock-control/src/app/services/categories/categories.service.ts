import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { GetAllCategoriesResponse } from 'src/app/models/interfaces/categories/response/GetCategoriesResponse';
import { envinment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private API_URL = envinment.API_URL;
  private JWT_TOKEN = this.coockie.get("USER_INFO");
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.JWT_TOKEN}`
    })
  }

  constructor(
    private http: HttpClient,
    private coockie: CookieService
  ) { }

  getAllCategories(): Observable<Array<GetAllCategoriesResponse>> {
    return this.http.get<Array<GetAllCategoriesResponse>>(
      `${this.API_URL}/categories`,
      this.httpOptions
    )
  }

}
