import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { first } from 'rxjs';
import { TodoSignalsService } from './services/todo-signals.service';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Todo } from './models/model/todo.model';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let todoSignalService: TodoSignalsService;

  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [AppComponent, BrowserAnimationsModule, NoopAnimationsModule],
        providers: [TodoSignalsService]
      });

      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      todoSignalService = TestBed.inject(TodoSignalsService)
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

  // teste do @output
  it('should set @output() property corretly', () => {
    component.projectName = "testing angular aplication";

    component.outputEvent
      .pipe(
        first()
      )
      .subscribe({
        next: (event) => {
          expect(event).toEqual('testing angular aplication');
          component.handleEmitEvent()
        }
      })
  })

  it('should create new todo correctly and call service method', () => {
    jest.spyOn(todoSignalService, 'updateTodos');
    
    const newTodo: Todo = {
      id: 1,
      title: 'testing creating todo',
      description: 'test new todo',
      done: true
    }

    component.handleCreateTodo(newTodo);

    fixture.detectChanges();

    expect(todoSignalService.updateTodos).toHaveBeenCalledWith(newTodo);
    expect(component.todoSignal()).toEqual([newTodo])
  })

  // testes de elementos do dom
  it('should not render paragraph in the dom', () => {
    const componentDebugElement: DebugElement = fixture.debugElement;
    const element: HTMLElement = componentDebugElement.nativeElement;
    const paragraph = element.querySelector('p');

    expect(paragraph).toBeNull();
  })

  it('should render paragraph correctly', () => {
    component.renderTestMessage = true;

    fixture.detectChanges();

    const componentDebugElement: DebugElement = fixture.debugElement;
    const paragraphDebugElement = componentDebugElement.query(By.css('p'));
    const paragraph: HTMLElement = paragraphDebugElement.nativeElement;

    expect(paragraph.textContent).toEqual('test yout angular application')
    
  })

  // teste de setTimout()
  it('should isDoned property to be false', () => {
    component.handleCheckIsDone();
    expect(component.isDoned).toBe(false);
  })

});
