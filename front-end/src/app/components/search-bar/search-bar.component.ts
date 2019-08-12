import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TeacherModel} from '../../models/teacher.model';
import {ScheduleTypeEnum} from '../../shared/schedule-type.enum';
import {StudentSearchComponent} from './student-search/student-search.component';
import {TeacherSearchComponent} from './teacher-search/teacher-search.component';
import {ClassroomSearchComponent} from './classroom-search/classroom-search.component';
import {ClassSearchComponent} from './class-search/class-search.component';

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
  @Output()
  buttonClassroomSearch = new EventEmitter();
  @Output()
  buttonClassSearch = new EventEmitter();

  @ViewChild(StudentSearchComponent, {static: false})
  private studentSearchComponent: StudentSearchComponent;
  @ViewChild(TeacherSearchComponent, {static: false})
  private teacherSearchComponent: TeacherSearchComponent;
  @ViewChild(ClassroomSearchComponent, {static: false})
  private classroomSearchComponent: ClassroomSearchComponent;
  @ViewChild(ClassSearchComponent, {static: false})
  private classSearchComponent: ClassSearchComponent;


  constructor() {
  }

  ngOnInit() {
  }

  getCardsByTeacherId(selectedTeacher) {
    if (selectedTeacher) {
      this.studentSearchComponent.clearInputs();
      this.classroomSearchComponent.clearInputs();
      this.classSearchComponent.clearInputs();
      this.buttonTeacherSearch.emit(selectedTeacher);
    }
  }

  getCardsByStudentId(studentId) {
    if (studentId) {
      this.classroomSearchComponent.clearInputs();
      this.teacherSearchComponent.clearInputs();
      this.classSearchComponent.clearInputs();
      this.buttonStudentSearch.emit(studentId);
    }
  }

  getCardsByClassroomId(classroomId) {
    if (classroomId) {
      this.studentSearchComponent.clearInputs();
      this.teacherSearchComponent.clearInputs();
      this.classSearchComponent.clearInputs();
      this.buttonClassroomSearch.emit(classroomId);
    }
  }

  getCardsByClassId(classId) {
    if (classId) {
      this.studentSearchComponent.clearInputs();
      this.classroomSearchComponent.clearInputs();
      this.teacherSearchComponent.clearInputs();
      this.buttonClassSearch.emit(classId);
    }
  }
}
