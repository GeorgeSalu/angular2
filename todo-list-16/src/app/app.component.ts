import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { SchoolData, SchoolService } from './services/school.service'
import { Observable, from, map, of, zip } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TodoCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public title = 'todo-list-16';
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
  ])

  constructor(private schoolService: SchoolService){}


  ngOnInit(): void {
    //this.getSchoolDatas()
    //this.getMultipledAges()
    this.getPeopleProfession()
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