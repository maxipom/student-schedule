import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClassModel} from '../../../models/class.model';
import {ClassroomService} from '../../../services/classroom.service';

@Component({
  selector: 'app-classroom-search',
  templateUrl: './classroom-search.component.html',
  styleUrls: ['./classroom-search.component.css', '../search-bar.component.css']
})
export class ClassroomSearchComponent implements OnInit {

  searchForm: FormGroup;
  classrooms: ClassModel[] = [];

  @Output()
  buttonClassroomSearch = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
              private classroomService: ClassroomService) {
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      classroomId: ['', Validators.maxLength(25)],
    });

    this.fillTeachersCombo();
  }

  private fillTeachersCombo() {
    this.classroomService.getClassrooms().subscribe((data: any) => {
      this.classrooms = data.classrooms;
    }, error => {
      console.warn('There was an error trying to get the classrooms', error);
    });
  }

  clearInputs() {
    this.searchForm.get('classroomId').setValue(null);
  }

  get classroomId() {
    return this.searchForm.get('classroomId').value;
  }

  onSubmit() {
    const selectedClassroom = this.classrooms.find((classroom) => {
      return classroom.id === this.classroomId;
    });
    this.buttonClassroomSearch.emit(selectedClassroom);
  }

}
