import { ChangeDetectionStrategy, Component, inject, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servicos-prestados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicos-prestados.component.html',
  styleUrl: './servicos-prestados.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ServicosPrestadosComponent implements OnInit {

  #route = inject(ActivatedRoute);
  #router = inject(Router);


  public getId = signal<null | string>(null);
  @Input() set id(id: string) {
    this.getId.set(id)
  }

  ngOnInit(): void {
    console.log(this.#route.snapshot.params['id']);
    this.#route.params.subscribe((res) => console.log(res['id']))

    console.log(this.#route.snapshot.queryParamMap.get('name'))
    console.log(this.#route.snapshot.queryParamMap.get('age'))

    this.#router.navigate(['/curso'])
  }

}
