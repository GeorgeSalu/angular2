import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ServicosPrestadosComponent } from './pages/servicos-prestados/servicos-prestados.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                title: 'Home da pagina',
                component: HomeComponent
            },
            {
                path: 'sobre',
                title: 'Sobre da pagina',
                loadComponent: () => import('./pages/sobre/sobre.component').then((p) => p.SobreComponent),
            },
            {
                path: 'servicos/:id',
                title: 'Servicos da pagina',
                component: ServicosPrestadosComponent
            },
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
