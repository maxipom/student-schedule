import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClassModel} from '../../../models/class.model';
import {ClassService} from '../../../services/class.service';

@Component({
  selector: 'app-class-search',
  templateUrl: './class-search.component.html',
  styleUrls: ['./class-search.component.css', '../search-bar.component.css']
})
export class ClassSearchComponent implements OnInit {

  searchForm: FormGroup;
  groups: ClassModel[] = [];

  @Output()
  buttonClassSearch = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
              private groupService: ClassService) {
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      groupId: ['', Validators.maxLength(25)],
    });

    this.fillTeachersCombo();
  }

  private fillTeachersCombo() {
    this.groupService.getClasses().subscribe((data: any) => {
      this.groups = data.groups;
    }, error => {
      console.warn('There was an error trying to get the groups', error);
    });
  }

  get groupId() {
    return this.searchForm.get('groupId').value;
  }

  onSubmit() {
    const selectedClassroom = this.groups.find((group) => {
      return group.id === this.groupId;
    });
    this.buttonClassSearch.emit(selectedClassroom);
  }

}
