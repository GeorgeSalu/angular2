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

  createNewCategories(requestDatas: {
    name: string;
  }): Observable<Array<GetAllCategoriesResponse>> {
    return this.http.post<Array<GetAllCategoriesResponse>> (
      `${this.API_URL}/category`,
      requestDatas,
      this.httpOptions
    )
  }

  getAllCategories(): Observable<Array<GetAllCategoriesResponse>> {
    return this.http.get<Array<GetAllCategoriesResponse>>(
      `${this.API_URL}/categories`,
      this.httpOptions
    )
  }

  deleteCategory(requestDatas: { category_id: string }): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/category/delete`, {
      ...this.httpOptions,
      params: {
        category_id: requestDatas?.category_id,
      }
    })
  }

  editCategoryName(requestDatas: {name: string, category_id: string}): Observable<void> {
    return this.http.put<void>(
      `${this.API_URL}/category/edit`,
      { name: requestDatas?.name },
      {
        ...this.httpOptions,
        params: {
          category_id: requestDatas?.category_id
        }
      }
    )
  }

}
