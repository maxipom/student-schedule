import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  constructor(private http: HttpClient) {
  }
  getClassrooms() {
    return this.http.get('/api/classrooms');
  }

}
