import { Routes } from '@angular/router';

export const cursoRoutes: Routes = [
    {
        path: '',
        title: 'Home da pagina',
        loadComponent: () => import('./home/home.component'),
    },
    {
        path: 'sobre',
        title: 'Sobre da pagina',
        loadComponent: () => import('./sobre/sobre.component'),
    },
    {
        path: 'servicos/:id',
        title: 'Servicos da pagina',
        loadComponent: () => import('./servicos-prestados/servicos-prestados.component'),
    },

];
