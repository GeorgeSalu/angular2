import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente17Component } from './componente17.component';

describe('Componente17Component', () => {
  let component: Componente17Component;
  let fixture: ComponentFixture<Componente17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente17Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componente17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
