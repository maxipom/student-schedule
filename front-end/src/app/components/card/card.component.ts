import {Component, Input, OnInit} from '@angular/core';
import {CardsTypesEnum} from '../../shared/cards-types.enum';
import {DisplayCard} from '../../shared/display-card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  public displayCard: DisplayCard;
  @Input()
  cardsType: CardsTypesEnum;
  cardsTypes = CardsTypesEnum;

  constructor() {
  }

  ngOnInit() {
  }

  getPeriodClass() {
    const cardSize = +this.displayCard.endPeriod - +this.displayCard.startPeriod;
    return 'period-' + cardSize;
  }
}
