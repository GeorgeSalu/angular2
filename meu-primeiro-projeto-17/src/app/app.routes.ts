import { Routes } from '@angular/router';
import { canActivateChildGuard } from './guard/can-activate-child.guard';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/curso.routes').then((r) => r.cursoRoutes),
        canActivateChild: [canActivateChildGuard]
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component'),
    }
];
