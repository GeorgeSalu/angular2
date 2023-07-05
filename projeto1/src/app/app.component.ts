import { AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterViewInit {
  title = 'projeto1';

  constructor() {
    console.log("componente construtor")
  }

  ngAfterViewInit(): void {
    console.log("")
  }

  ngAfterContentInit(): void {
    console.log("componente ngAfterContenteInit")
  }

  ngOnDestroy(): void {
    console.log("componente onDestroy")
  }

  ngDoCheck(): void {
    console.log("componente doCheck")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("componente OnChanges")
  }

  ngOnInit(): void {
    console.log("componente onInit")
  }

  mudarTexto() {
    this.title += "a";
  }

}
