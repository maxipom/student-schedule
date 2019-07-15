import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TeacherModel} from '../models/teacher.model';
import {ScheduleTypeEnum} from '../shared/schedule-type.enum';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  teachers: TeacherModel[] = [];
  @Input()
  scheduleType: ScheduleTypeEnum;
  scheduleTypes = ScheduleTypeEnum;
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
