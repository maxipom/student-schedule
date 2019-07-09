import {Component, OnInit} from '@angular/core';
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

  constructor(private formBuilder: FormBuilder,
              private teacherService: TeacherService) {
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      professor_name: ['', Validators.maxLength(25)],
    });

    this.fillTeachersCombo();
  }

  private fillTeachersCombo() {
    this.teacherService.getTeachers().subscribe((data: any) => {
      console.log(data);
      this.teachers = data.teachers;
    }, error => {
      console.warn('There was an error trying to get the teachers', error);
    });
  }

  get professor_name() {
    return this.searchForm.get('professor_name').value;
  }

  onSubmit() {
    alert(this.professor_name);
  }
}
