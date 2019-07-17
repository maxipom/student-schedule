import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClassModel} from '../../models/class.model';
import {ClassroomService} from '../../services/classroom.service';

@Component({
  selector: 'app-group-search',
  templateUrl: './group-search.component.html',
  styleUrls: ['./group-search.component.css', '../search-bar.component.css']
})
export class GroupSearchComponent implements OnInit {

  searchForm: FormGroup;
  groups: ClassModel[] = [];

  @Output()
  buttonGroupSearch = new EventEmitter();

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
      this.groups = data.classrooms;
    }, error => {
      console.warn('There was an error trying to get the classrooms', error);
    });
  }

  get classroomId() {
    return this.searchForm.get('classroomId').value;
  }

  onSubmit() {
    const selectedClassroom = this.groups.find((classroom) => {
      return classroom.id === this.classroomId;
    });
    this.buttonGroupSearch.emit(selectedClassroom);
  }

}
