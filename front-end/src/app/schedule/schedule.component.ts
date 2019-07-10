import {Component, Input, OnInit} from '@angular/core';
import {CardModel} from '../models/card.model';
import {CardsTypesEnum} from '../shared/cards-types.enum';
import {PeriodModel} from '../models/period.model';
import {ScheduleService} from '../services/schedule.service';

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
  periods: PeriodModel[];

  constructor(private scheduleService: ScheduleService) {
    this.getPeriods();
  }

  ngOnInit() {
  }

  getPeriods() {
    this.scheduleService.getPeriods().subscribe(
      (periods) => {
        this.periods = periods;
      }
    );
  }
}
