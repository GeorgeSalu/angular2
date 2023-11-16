import { Component, EventEmitter, Input, OnInit, Output, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { SchoolData, SchoolService } from './services/school.service'
import { Observable, filter, from, map, of, switchMap, zip } from 'rxjs';
import { TodoSignalsService } from './services/todo-signals.service';
import { Todo } from './models/model/todo.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TodoCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public title = 'todo-list-16';

  @Input()
  public projectName!: string;

  @Output()
  public outputEvent = new EventEmitter<string>();

  public todoSignal!: WritableSignal<Array<Todo>>;

  public renderTestMessage = false;
  public isDoned = false;

  public handleCheckIsDone(): void {
    setTimeout(() => {
      this.isDoned = true;
    },200);
  }

  public handleEmitEvent(): void {
    this.outputEvent.emit(this.projectName)
  }

  public students: Array<SchoolData> = [];
  public teachers: Array<SchoolData> = [];
  private zipSchoolResponse$ = zip(
    this.getStudentsDatas(),
    this.getTeachersDatas()
  );

  private ages = of(20,30,40,50,60,70);
  private peopleDatas = from([
    { name: 'marcos junior', age: 20, profession: 'softeare develop' },
    { name: 'julia', age: 30, profession: 'ux designer' },
    { name: 'jorge', age: 10, profession: 'scrum master' },
    { name: 'sebastiao', age: 50, profession: 'software develop' },
    { name: 'carla', age: 60, profession: 'software develop' },
  ])
  private studentUserId = '2'

  constructor(
    private schoolService: SchoolService,
    private todoSignalService: TodoSignalsService
  ){}

  public handleCreateTodo(todo: Todo): void {
    if(todo) {
      this.todoSignalService.updateTodos(todo);
      this.todoSignal = this.todoSignalService.todosState
    }
  }


  ngOnInit(): void {
    //this.getSchoolDatas()
    //this.getMultipledAges()
    //this.getPeopleProfession()
    //this.getSoftwareDevelopName();
    this.handleFindUstudentById()
  }

  public handleFindUstudentById(): void {
    this.getStudentsDatas().pipe(
        switchMap((students) => 
          this.findStudentsById(students, this.studentUserId)
        ))
        .subscribe({
          next: (response) => {
            console.log('retorno estudante filtrado', response)
          }
        })
  }

  public findStudentsById(
    students: Array<SchoolData>,
    userId: string
  ){
    return of([students.find((student) => student.id === userId)])
  }

  public getMultipledAges() {
    this.ages
      .pipe(
        map((age) => age * age)
      )
      .subscribe({
        next: ( response) => console.log('idade multiplicado', response)
      })
  }

  public getSoftwareDevelopName(): void {
    this.peopleDatas
      .pipe(
        filter((people) => people.profession === 'software develop'),
        map((people) => people.name)
      ).subscribe({
        next: (response) => console.log('profissao', response)
      })
  }

  public getPeopleProfession(): void {
    this.peopleDatas
      .pipe(
        map((people) => people.profession)
      ).subscribe({
        next: (response) => console.log('profissao', response)
      })
  }

  public getSchoolDatas(): void {
    this.zipSchoolResponse$.subscribe({
      next: (response) => {
        console.log('students', response[0]);
        console.log('teachers', response[0]);
      }
    })
  }

  private getStudentsDatas(): Observable<Array<SchoolData>> {
    return this.schoolService.getStudents();
  }

  private getTeachersDatas(): Observable<Array<SchoolData>> {
    return this.schoolService.getTeachers()
  }

}