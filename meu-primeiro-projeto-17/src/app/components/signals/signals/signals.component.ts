import { Component, signal } from '@angular/core';

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

  public fullName = this.firstName() + this.lastName();

  public array = [1];

  constructor() {

  }

  public updateName() {

  }

  public updateArray() {

  }

}
