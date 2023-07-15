import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaVirtualComponent } from './loja-virtual.component';

describe('LojaVirtualComponent', () => {
  let component: LojaVirtualComponent;
  let fixture: ComponentFixture<LojaVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LojaVirtualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LojaVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
