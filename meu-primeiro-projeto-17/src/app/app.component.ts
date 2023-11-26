import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TamplateBindingComponent } from './components/template/tamplate-binding/tamplate-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferableViewsComponent } from './components/template/template-deferable-views/template-deferable-views.component';
import { SignalsComponent } from './components/signals/signals/signals.component';
import { PaiOuMaeComponent } from './components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    NewComponent, 
    TamplateBindingComponent,
    TemplateVariablesComponent, 
    TemplateControlFlowComponent, 
    TemplateDeferableViewsComponent,
    SignalsComponent, 
    PaiOuMaeComponent],
  styles: [`
    h1 {
      color: red
    }
  `],
  template: `
    <!--  <router-outlet></router-outlet> -->
    <!-- <h1>Curso de angular</h1> -->
    <!-- <app-tamplate-binding /> -->
    <!-- <app-template-variables /> -->
    <!-- <app-template-control-flow /> -->
    <!-- <app-template-deferable-views /> -->
    <!-- <app-signals /> -->
    <app-pai-ou-mae />
  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-17';
}
