import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { retry, shareReplay } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const headers = new HttpHeaders().set('x-vida-full-stack', 'dev');
  const reqClone = req.clone({ headers })

  return next(reqClone).pipe(
    shareReplay(),
    retry({ count: 2, delay: 1000 })
  );
};
