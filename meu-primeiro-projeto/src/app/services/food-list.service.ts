import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<string> = [
    "x bacon",
    "feijao",
    "ovo"
  ]

  constructor() { }

  public foodList() {
    return this.list;
  }

  public foodListAdd(value: string) {
    return this.list.push(value);
  }

}
