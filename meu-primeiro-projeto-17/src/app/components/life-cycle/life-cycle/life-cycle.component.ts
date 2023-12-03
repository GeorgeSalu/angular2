import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, signal } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss'
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterContentInit, AfterContentChecked {

  @Input()
  public myNumber = 0;
  public myText = signal('george')

  @ViewChild('content')
  public content!: ElementRef;

  @ContentChild('text')
  public text!: ElementRef;

  // construtor ou inicializador
  constructor(private fb: FormBuilder) {}
  // changes detections
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges', changes)
    if(changes['myNumber'].previousValue === 2) {
      alert('deu bom')
    }
  }
  
  ngOnInit(): void {
    console.log('ngOnInit')
  }
  
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  
  ngAfterViewInit(): void {
    console.log('ngAfterViewinit')
    console.log(this.content.nativeElement.innerText);
    console.log(this.text.nativeElement.innerText);
  }
  
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    console.log(this.text.nativeElement.innerText);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  
}
