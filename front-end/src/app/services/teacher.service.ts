import {Injectable} from '@angular/core';
import {TeacherModel} from '../models/teacher.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) {
  }

  getTeachers() {
    return this.http.get('/api/teachers');
  }

}
