import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                title: 'Home da pagina',
                loadComponent: () => import('./pages/home/home.component').then((p) => p.HomeComponent),
            },
            {
                path: 'sobre',
                title: 'Sobre da pagina',
                loadComponent: () => import('./pages/sobre/sobre.component').then((p) => p.SobreComponent),
            },
            {
                path: 'servicos/:id',
                title: 'Servicos da pagina',
                loadComponent: () => import('./pages/servicos-prestados/servicos-prestados.component').then((p) => p.ServicosPrestadosComponent),
            },
        ]
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then((p) => p.NotFoundComponent),
    }
];
