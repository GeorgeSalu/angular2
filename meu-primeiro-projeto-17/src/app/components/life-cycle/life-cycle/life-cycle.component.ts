import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss'
})
export class LifeCycleComponent implements OnChanges {

  @Input()
  public myNumber = 0;


  // construtor ou inicializador
  constructor(private fb: FormBuilder) {}
  
  // changes detections
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges', changes)
    if(changes['myNumber'].previousValue === 2) {
      alert('deu bom')
    }
  }
  

}
