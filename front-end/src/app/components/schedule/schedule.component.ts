import {Component, Input, OnInit} from '@angular/core';
import {CardsTypesEnum} from '../../shared/cards-types.enum';
import {PeriodModel} from '../../models/period.model';
import {ScheduleService} from '../../services/schedule.service';
import {DisplayCard} from '../../shared/display-card.model';

const ALL_DAY_ID = '11111';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  @Input()
  cardsType: CardsTypesEnum;
  periods: PeriodModel[];
  dayDefs: DayDefModel[];
  @Input()
  displayCards: DisplayCard[];

  constructor(private scheduleService: ScheduleService) {
    this.getPeriods();
    this.getDayDefs();
  }

  ngOnInit() {
  }



  getPeriods() {
    this.scheduleService.getPeriods().subscribe(
      (periods) => {
        this.periods = periods;
        this.addEmptyPeriodAtTheBegining();
      }
    );
  }

  private addEmptyPeriodAtTheBegining() {
    const emptyPeriod = new PeriodModel(null, null, null, null, null);
    this.periods.unshift(emptyPeriod);
  }

  getDayDefs() {
    this.scheduleService.getDayDefs().subscribe(
      (dayDefs) => {
        this.dayDefs = dayDefs.filter((dayDef) => {
            return dayDef.day !== ALL_DAY_ID;
          }
        );
      }
    );
  }
}

