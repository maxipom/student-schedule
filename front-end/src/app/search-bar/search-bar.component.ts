import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TeacherService} from '../services/teacher.service';
import {TeacherModel} from '../models/teacher.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchForm: FormGroup;
  teachers: TeacherModel[] = [];

  @Output()
  buttonTeacherSearch = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
              private teacherService: TeacherService) {
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      teacher_id: ['', Validators.maxLength(25)],
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

  get teacher_id() {
    return this.searchForm.get('teacher_id').value;
  }

  onSubmit() {
    const selectedTeacher = this.teachers.find((teacher) => {
      return teacher.id === this.teacher_id;
    });
    this.buttonTeacherSearch.emit(selectedTeacher);
  }
}
