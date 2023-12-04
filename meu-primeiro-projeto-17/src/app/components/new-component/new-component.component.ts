import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss'
})
export class NewComponent implements OnInit{

  public name = 'new component';

  #apiService = inject(ApiService);

  ngOnInit(): void {
    console.log(this.#apiService.name())

    this.#apiService.name$.subscribe({
      next: (next) => console.log(next),
      error: (error) => console.log(error),
      complete: () => console.log('complete')
    })

  }

}
