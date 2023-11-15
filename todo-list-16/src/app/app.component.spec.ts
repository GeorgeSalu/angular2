import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [AppComponent]
      });

      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // teste do @input
  it('should set @Input() property corretly', () => {
    component.projectName = "testing angular with jest";

    fixture.detectChanges();

    expect(component.projectName).toEqual('testing angular with jest');
  })

});
