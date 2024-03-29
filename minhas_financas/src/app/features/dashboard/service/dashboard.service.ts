import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpBaseService } from 'src/app/shared/base/http-base.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends HttpBaseService {

  private endpoint = "entradas";

  constructor(protected override readonly injector: Injector) {
    super(injector);
  }

  getEntradas(payload?: any): Observable<any> {
    const params = payload? `?q=${payload.mes}-${payload.ano}` : '';

    return this.httpGet(`${this.endpoint}${params}`);
  }

}
