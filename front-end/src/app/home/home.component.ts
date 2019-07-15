import {Component, OnInit} from '@angular/core';
import {CardService} from '../services/card.service';
import {CardModel} from '../models/card.model';
import {CardsTypesEnum} from '../shared/cards-types.enum';
import {DisplayCard} from '../shared/display-card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards: CardModel[] = [];
  scheduleTitle: string;
  cardsType: CardsTypesEnum;
  displayCards: DisplayCard[];

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
          this.getDisplayCards();
        }
      }, error => {
        console.warn('There was an error trying to get the cards of the teacher ' + teacher.id, error);
      });
  }

  getDisplayCards() {
    if (this.cards) {
      const newCards = [];
      let lastLessonId = '';
      let newCard: DisplayCard;
      this.cards.forEach(
        (card) => {
          if (lastLessonId === card.lesson.id) {
            newCard.endPeriod = card.period;
          } else {
            if (newCard) {
              newCards.push(newCard);
            }
            newCard = new DisplayCard(card, card.period, card.period);
          }
          lastLessonId = card.lesson.id;
        }
      );
      if (newCard) {
        newCards.push(newCard);
      }
      this.displayCards = newCards;
      console.log(this.displayCards);
    }
  }
}
