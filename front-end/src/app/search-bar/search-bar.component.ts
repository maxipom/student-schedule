import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TeacherModel} from '../models/teacher.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  teachers: TeacherModel[] = [];

  @Output()
  buttonTeacherSearch = new EventEmitter();
  @Output()
  buttonStudentSearch = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  getCardsByTeacherId(selectedTeacher) {
    if (selectedTeacher) {
      this.buttonTeacherSearch.emit(selectedTeacher);
    }
  }
  getCardsByStudentId(studentId) {
    if (studentId) {
      this.buttonStudentSearch.emit(studentId);
    }
  }
}
