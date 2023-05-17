import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindigComponent } from './data-bindig.component';

describe('DataBindigComponent', () => {
  let component: DataBindigComponent;
  let fixture: ComponentFixture<DataBindigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
