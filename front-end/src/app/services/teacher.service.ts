import {Injectable} from '@angular/core';
import {TeacherModel} from '../models/teacher.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) {
  }

  getTeachers(): TeacherModel[] {
    let teachers = [];
    this.http.get('/api/schedule/getTeachers').subscribe((data: TeacherModel[]) => {
      teachers = data;
    }, error => {
      console.warn('There was an error trying to get the teachers', error);
    });
    return teachers;
    // return this._getMockedTeaccher();
  }

  private _getMockedTeaccher() {
    const mockedTeachersArray = [];
    mockedTeachersArray.push(
      new TeacherModel('B073AFFC1EF01233', 'Aleksandar Kojovi�')
    );
    return mockedTeachersArray;
  }
}
