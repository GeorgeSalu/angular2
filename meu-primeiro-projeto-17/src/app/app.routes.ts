import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ServicosPrestadosComponent } from './pages/servicos-prestados/servicos-prestados.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'sobre',
        component: SobreComponent
    },
    {
        path: 'servicos',
        component: ServicosPrestadosComponent
    }
];
