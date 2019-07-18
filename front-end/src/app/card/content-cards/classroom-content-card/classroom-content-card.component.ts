import {Component, Input, OnInit} from '@angular/core';
import {CardModel} from '../../../models/card.model';

@Component({
  selector: 'app-classroom-content-card',
  templateUrl: './classroom-content-card.component.html',
  styleUrls: ['./classroom-content-card.component.css', '../shared/content-card.style.css']
})
export class ClassroomContentCardComponent implements OnInit {
  @Input()
  public card: CardModel;

  constructor() {
  }

  ngOnInit() {
  }

}
