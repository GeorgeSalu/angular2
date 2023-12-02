import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

  public profileForm = new FormGroup({
    name: new FormControl(''),
    myStacks: new FormGroup({
      front: new FormControl('Angular'),
      back: new FormControl('nodejs')
    }),
    myFavoriteFoods: new FormArray([
      
    ])
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
