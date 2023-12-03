import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, signal } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { timer } from 'rxjs';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss'
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterContentInit, AfterContentChecked, OnDestroy {

  @Input()
  public myNumber = 0;
  public myText = signal('george')

  @ViewChild('content')
  public content!: ElementRef;

  @ContentChild('text')
  public text!: ElementRef;

  private detroy$ = timer(0, 1000).subscribe({
    next: (next) => console.log('next', next),
    error: (error) => console.log('error', error),
    complete: () => console.log('complete')
  })

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
  
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
    this.detroy$.unsubscribe();
  }
}
