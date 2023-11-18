import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponet2Component } from './new-componet-2.component';

describe('NewComponet2Component', () => {
  let component: NewComponet2Component;
  let fixture: ComponentFixture<NewComponet2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewComponet2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewComponet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
