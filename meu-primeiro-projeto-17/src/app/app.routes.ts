import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                title: 'Home da pagina',
                loadComponent: () => import('./pages/home/home.component'),
            },
            {
                path: 'sobre',
                title: 'Sobre da pagina',
                loadComponent: () => import('./pages/sobre/sobre.component'),
            },
            {
                path: 'servicos/:id',
                title: 'Servicos da pagina',
                loadComponent: () => import('./pages/servicos-prestados/servicos-prestados.component'),
            },
        ]
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component'),
    }
];
