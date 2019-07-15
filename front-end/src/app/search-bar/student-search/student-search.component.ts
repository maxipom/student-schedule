import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {
  searchForm: FormGroup;

  @Output()
  buttonStudentSearch = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      studentId: ['', Validators.maxLength(25)],
    });

  }


  get studentId() {
    return this.searchForm.get('studentId').value;
  }

  onSubmit() {
    this.buttonStudentSearch.emit(this.studentId);
  }

}
