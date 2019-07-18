import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

const MAXIMUM_ID_LENGHT = 4;

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css', '../search-bar.component.css']
})
export class StudentSearchComponent implements OnInit {
  searchForm: FormGroup;

  @Output()
  buttonStudentSearch = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      studentId: ['', Validators.compose([Validators.maxLength(MAXIMUM_ID_LENGHT), Validators.minLength(1)])],
      studentYear: ['', Validators.compose([Validators.maxLength(4), Validators.minLength(4)])]
    });

  }


  get studentId(): string {
    return this.searchForm.get('studentId').value;
  }

  get studentYear(): string {
    return this.searchForm.get('studentYear').value;
  }

  getFullStudentId() {
    let studentId = this.studentId;
    if (this.studentId.length < MAXIMUM_ID_LENGHT) {
      const extraZeros = '0'.repeat(MAXIMUM_ID_LENGHT - this.studentId.length);
      studentId = extraZeros + this.studentId;
    }
    return this.studentYear + studentId;
  }

  onSubmit() {
    if (this.searchForm.valid) {
      this.buttonStudentSearch.emit(this.getFullStudentId());
    } else {
      alert('Proveriti podatke o učeniku');
    }
  }

}
