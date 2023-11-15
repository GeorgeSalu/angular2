import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";

export interface SchoolData {
  name: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private students: Array<SchoolData> = [
    {name: "marcos", id: '1'},
    {name: "joao", id: '2'},
    {name: "marcia", id: '3'}
  ];

  private teachers: Array<SchoolData> = [
    {name: "jorge", id: '1'},
    {name: "luiz", id: '2'},
    {name: "gabriel", id: '3'}
  ];

  public getStudents(): Observable<Array<SchoolData>> {
    return of(this.students);
  }

  public getTeachers(): Observable<Array<SchoolData>> {
    return of(this.teachers);
  }

}