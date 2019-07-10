import {Component, Input, OnInit} from '@angular/core';
import {CardModel} from '../models/card.model';
import {CardsTypesEnum} from '../shared/cards-types.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  public card: CardModel;
  @Input()
  cardsType: CardsTypesEnum;
  cardsTypes = CardsTypesEnum;
  constructor() {
  }

  ngOnInit() {
  }

}
