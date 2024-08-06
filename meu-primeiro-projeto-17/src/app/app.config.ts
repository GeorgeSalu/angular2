import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';


import localePt from '@angular/common/locales/pt'
import { provideImgixLoader, registerLocaleData } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './interceptor/http.interceptor';
import { provideTranslate } from './app.translate';

registerLocaleData(localePt)


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withRouterConfig(
      {
        paramsInheritanceStrategy: 'always'
      }
    )),
    provideHttpClient(
      withInterceptors([httpInterceptor])
    ),
    provideTranslate(),
    provideImgixLoader('http://localhost:4200/assets/'),
    { provide: LOCALE_ID, useValue: 'pt-BR' }]
};
