import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/curso.routes').then((r) => r.cursoRoutes),
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component'),
    }
];
