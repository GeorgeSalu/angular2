import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamplateBindingComponent } from './tamplate-binding.component';

describe('TamplateBindingComponent', () => {
  let component: TamplateBindingComponent;
  let fixture: ComponentFixture<TamplateBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TamplateBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TamplateBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
