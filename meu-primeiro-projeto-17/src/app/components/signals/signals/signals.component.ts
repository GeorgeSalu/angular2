import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {

  public firstName = signal('george ');
  public lastName = signal('silva');

  public fullName = computed(() => {
    return this.firstName() + this.lastName();
  })

  public array = signal([1]);

  /**
    effect - raramente são necessarios na maioria dos codigos, mas podem ser uteis em
    circustancias especiais.

    - registro de dados exibidos e quando eles mudam, seja para analise ou como ferramenta
    de depuração

    - manter os dados sincronizados com window.locastorage.

    - adicionando comportamento DOM personalizado que não podem ser expresso com sintaxe de
    modelo

    - executar renderização personalizada em um <canvas>, biblioteca de graficos ou outra 
    biblioteca de UI de terceiros
  
   */

  constructor() {
    effect(() => {
      console.log(this.firstName())
      console.log(this.array())
    })
  }

  public updateName() {
    return this.firstName.set('joao');
  }

  public updateArray() {
    this.array.update((oldValue: Array<number>) => {
      return [...oldValue, oldValue.length + 1]
    })
  }

}
