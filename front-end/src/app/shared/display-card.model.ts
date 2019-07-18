import {CardModel} from '../models/card.model';

export class DisplayCard {
  public card: CardModel;
  public startPeriod: string;
  public endPeriod: string;

  constructor(card, startPeriod, endPeriod) {
    this.card = card;
    this.startPeriod = startPeriod;
    this.endPeriod = endPeriod;
  }
}
