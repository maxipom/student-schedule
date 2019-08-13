import {Component, Input, OnInit} from '@angular/core';
import {DisplayCard} from '../../shared/display-card.model';
import {ScheduleTypeEnum} from '../../shared/schedule-type.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  public displayCard: DisplayCard;
  @Input()
  scheduleType: ScheduleTypeEnum;
  scheduleTypes = ScheduleTypeEnum;

  constructor() {
  }

  ngOnInit() {
  }

  getPeriodClass() {
    const cardSize = +this.displayCard.endPeriod - +this.displayCard.startPeriod;
    return 'period-' + cardSize;
  }
}
