import {Component, OnInit} from '@angular/core';
import {CardService} from '../services/card.service';
import {CardModel} from '../models/card.model';
import {CardsTypesEnum} from '../shared/cards-types.enum';
import {DisplayCard} from '../shared/display-card.model';
import {LessonModel} from '../models/lesson.model';

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

  getCardsByStudentId(studentId) {
    this.cardService.getCardsByStudentId(studentId).subscribe(
      (cards: CardModel[]) => {
        if (cards) {
          this.cards = cards;
          this.scheduleTitle = 'Učenik ' + studentId;
          this.cardsType = CardsTypesEnum.STUDENT_CARD;
          this.getDisplayCards();
        }
      }, error => {
        console.warn('There was an error trying to get the cards of the student ' + studentId, error);
      });
  }

  getDisplayCards() {
    if (this.cards) {
      const newCards = [];
      let lastCard = CardService.getEmptyCard() ;
      let newCard: DisplayCard;
      this.cards.forEach(
        (card) => {
          if (lastCard.lesson.id === card.lesson.id &&
            lastCard.day === card.day) {
            if (+newCard.endPeriod < +card.period) {
              newCard.endPeriod = card.period;
            }
          } else {
            if (newCard) {
              newCards.push(newCard);
            }
            newCard = new DisplayCard(card, card.period, card.period);
          }
          lastCard = card;
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
