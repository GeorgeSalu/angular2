import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntradasRoutingModule } from './entradas-routing.module';
import { ListComponent } from './componentes/list/list.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';


@NgModule({
  declarations: [
    ListComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    EntradasRoutingModule
  ]
})
export class EntradasModule { }
