import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, JsonPipe],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

  private _fb = inject(FormBuilder);

  public profileForm = this._fb.group({
    name: [''],
    myStacks: this._fb.group({
      front: ['Angular'],
      back: ['nodejs']
    }),
    myFavoriteFoods: this._fb.array([['x-tudo']])
  })

  public update() {
    this.profileForm.patchValue({
      name: 'maria',
      myStacks: {
        front: 'vuejs',
        back: 'nestjs'
      }
    })
  }

  public addMyFavoriteFoods(newFood: string) {
    const myFavoriteFoods = this.profileForm.get('myFavoriteFoods') as FormArray;
    const addNewFood = new FormControl(newFood);
    
    myFavoriteFoods.push(addNewFood);
  }
}
