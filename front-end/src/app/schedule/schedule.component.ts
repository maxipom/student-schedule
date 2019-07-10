import {Component, Input, OnInit} from '@angular/core';
import {CardModel} from '../models/card.model';
import {CardsTypesEnum} from '../shared/cards-types.enum';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  @Input()
  cards: CardModel[];
  @Input()
  cardsType: CardsTypesEnum;
  constructor() { }

  ngOnInit() {
  }

}
