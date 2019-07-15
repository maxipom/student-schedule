import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TeacherModel} from '../../models/teacher.model';
import {TeacherService} from '../../services/teacher.service';

@Component({
  selector: 'app-teacher-search',
  templateUrl: './teacher-search.component.html',
  styleUrls: ['./teacher-search.component.css']
})
export class TeacherSearchComponent implements OnInit {
  searchForm: FormGroup;
  teachers: TeacherModel[] = [];

  @Output()
  buttonTeacherSearch = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
              private teacherService: TeacherService) {
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      teacherId: ['', Validators.maxLength(25)],
    });

    this.fillTeachersCombo();
  }

  private fillTeachersCombo() {
    this.teacherService.getTeachers().subscribe((data: any) => {
      this.teachers = data.teachers;
    }, error => {
      console.warn('There was an error trying to get the teachers', error);
    });
  }

  get teacherId() {
    return this.searchForm.get('teacherId').value;
  }

  onSubmit() {
    const selectedTeacher = this.teachers.find((teacher) => {
      return teacher.id === this.teacherId;
    });
    this.buttonTeacherSearch.emit(selectedTeacher);
  }

}
