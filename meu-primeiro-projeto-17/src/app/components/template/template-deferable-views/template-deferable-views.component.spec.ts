import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDeferableViewsComponent } from './template-deferable-views.component';

describe('TemplateDeferableViewsComponent', () => {
  let component: TemplateDeferableViewsComponent;
  let fixture: ComponentFixture<TemplateDeferableViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDeferableViewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateDeferableViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
