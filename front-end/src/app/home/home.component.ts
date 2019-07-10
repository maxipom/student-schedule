import {Component, OnInit} from '@angular/core';
import {CardService} from '../services/card.service';
import {CardModel} from '../models/card.model';
import {CardsTypesEnum} from '../shared/cards-types.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cards: CardModel[] = [];
  public scheduleTitle: string;
  public cardsType: CardsTypesEnum;

  constructor(private cardService: CardService) {
  }

  ngOnInit() {
  }

  getCardsByTeacherId(teacher) {
    this.cardService.getCardsByTeacherId(teacher.id).subscribe(
      (cards: CardModel[]) => {
        if (cards) {
          this.cards = cards;
          this.scheduleTitle = 'Predavač ' + teacher.name;
          this.cardsType = CardsTypesEnum.TEACHER_CARD;
        }
      }, error => {
        console.warn('There was an error trying to get the cards of the teacher ' + teacher.id, error);
      });
  }
}
