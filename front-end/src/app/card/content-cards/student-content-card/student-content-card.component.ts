import {Component, Input, OnInit} from '@angular/core';
import {CardModel} from '../../../models/card.model';

@Component({
  selector: 'app-student-content-card',
  templateUrl: './student-content-card.component.html',
  styleUrls: ['./student-content-card.component.css', '../shared/content-card.style.css']
})
export class StudentContentCardComponent implements OnInit {
  @Input()
  public card: CardModel;

  constructor() {
  }

  ngOnInit() {
  }

}
