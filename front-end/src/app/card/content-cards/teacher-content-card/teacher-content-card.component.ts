import {Component, Input, OnInit} from '@angular/core';
import {CardModel} from '../../../models/card.model';

@Component({
  selector: 'app-teacher-content-card',
  templateUrl: './teacher-content-card.component.html',
  styleUrls: ['./teacher-content-card.component.css']
})
export class TeacherContentCardComponent implements OnInit {
  @Input()
  public card: CardModel;

  constructor() {
  }

  ngOnInit() {
  }

  getClassroomsNames() {
    return this.card.lesson.classrooms.map(x => x.short).join(' / ');
  }
}
