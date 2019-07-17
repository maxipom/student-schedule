import {Component, OnInit} from '@angular/core';
import {CardService} from '../services/card.service';
import {CardModel} from '../models/card.model';
import {CardsTypesEnum} from '../shared/cards-types.enum';
import {DisplayCard} from '../shared/display-card.model';
import {ScheduleTypeEnum} from '../shared/schedule-type.enum';
import {ClassroomModel} from '../models/classroom.model';
import {ClassModel} from '../models/class.model';

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
  selectedScheduleType: ScheduleTypeEnum;

  constructor(private cardService: CardService) {
  }

  ngOnInit() {
  }

  getCardsByTeacherId(teacher) {
    this.selectedScheduleType = ScheduleTypeEnum.TEACHER_SCHEDULE;
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
    this.selectedScheduleType = ScheduleTypeEnum.STUDENT_SCHEDULE;
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

  getCardsByClassroomId(classroom: ClassroomModel) {
    this.selectedScheduleType = ScheduleTypeEnum.CLASSROOM_SCHEDULE;
    this.cardService.getCardsByClassroomId(classroom.id).subscribe(
      (cards: CardModel[]) => {
        if (cards) {
          this.cards = cards;
          this.scheduleTitle = 'Učeionica ' + classroom.short;
          this.cardsType = CardsTypesEnum.CLASSROOM_CARD;
          this.getDisplayCards();
        }
      }, error => {
        console.warn('There was an error trying to get the cards of the classroom ' + classroom.id, error);
      });
  }

  getCardsByClassId(classModel: ClassModel) {
    this.selectedScheduleType = ScheduleTypeEnum.GROUP_SCHEDULE;
    this.cardService.getCardsByClassId(classModel.id).subscribe(
      (cards: CardModel[]) => {
        if (cards) {
          this.cards = cards;
          this.scheduleTitle = 'Odeljenja ' + classModel.short;
          this.cardsType = CardsTypesEnum.STUDENT_CARD;
          this.getDisplayCards();
        }
      }, error => {
        console.warn('There was an error trying to get the cards of the classes ' + classModel.id, error);
      });
  }

  getDisplayCards() {
    if (this.cards) {
      const newCards = [];
      let lastCard = CardService.getEmptyCard();
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
    }
  }
}
