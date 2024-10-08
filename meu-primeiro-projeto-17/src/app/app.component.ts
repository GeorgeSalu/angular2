import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TamplateBindingComponent } from './components/template/tamplate-binding/tamplate-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferableViewsComponent } from './components/template/template-deferable-views/template-deferable-views.component';
import { SignalsComponent } from './components/signals/signals/signals.component';
import { PaiOuMaeComponent } from './components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component';
import { AngularPipesComponent } from './components/pipes/angular-pipes/angular-pipes.component';
import { TemplateDrivenFormsComponent } from './components/forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';
import { ContentComponent } from './components/content/content.component';
import { HostElementsComponent } from './components/host-elements/host-elements.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle/life-cycle.component';
import { ConsumeServiceComponent } from '@components/consume-service/consume-service.component';
import { TranslateComponent } from '@components/translate/translate.component';
import { OptImageComponent } from '@components/opt-image/opt-image.component';
import { AnimationsComponent } from "./components/animations/animations.component";

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
    PaiOuMaeComponent,
    AngularPipesComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    ContentComponent,
    HostElementsComponent,
    LifeCycleComponent,
    TranslateComponent,
    OptImageComponent,
    ConsumeServiceComponent,
    AnimationsComponent
  ],
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
    <!-- <app-pai-ou-mae /> -->
    <!--  <app-angular-pipes /> -->
    <!-- <app-template-driven-forms /> -->
    <!-- <app-reactive-forms /> -->
    <!--<app-content >
      <header id="header">
        <p>header</p>
      </header> 
      <p text>texto</p>
      <p>texto</p>
      <footer class="footer">
        <p>footer</p>
      </footer>  
    </app-content> -->
    <!-- <app-host-elements /> -->
    <!--
    @if (boolean) {
      <app-life-cycle [myNumber]="number" >
        <p #text>Text</p>
      </app-life-cycle>
    }

    <button (click)="boolean = !boolean">destroy component</button>
  
    <h1>Curso de angular</h1>
    <h2>Service</h2>
    <app-consume-service />
    
    <h1>curso angular</h1>
    <h2>rotas</h2>
    <router-outlet></router-outlet>
    
    <h1>curso de angular</h1>
    <h2>translate</h2>
    <app-translate />
    
    <h1>Curso de angular</h1>
    <h2>otimizacao de imagens</h2>
    <app-opt-image />
    -->
    <h1>curso de angular</h1>
    <app-animations />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

}
