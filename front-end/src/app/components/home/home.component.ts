import {Component, OnInit} from '@angular/core';
import {CardService} from '../../services/card.service';
import {CardModel} from '../../models/card.model';
import {DisplayCard} from '../../shared/display-card.model';
import {ScheduleTypeEnum} from '../../shared/schedule-type.enum';
import {ClassroomModel} from '../../models/classroom.model';
import {ClassModel} from '../../models/class.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  scheduleTitle: string;
  displayCards: DisplayCard[] = [];
  selectedScheduleType: ScheduleTypeEnum;
  scheduleTypes = ScheduleTypeEnum;
  searchMenuExpanded = true;
  todayDate: Date;

  constructor(private cardService: CardService) {
  }

  ngOnInit() {
    this.scheduleTitle = 'Izaberite raspored';
    this.todayDate = new Date();
  }

  switchSearchMenu() {
    this.searchMenuExpanded = !this.searchMenuExpanded;
  }

  getCards(scheduleType: ScheduleTypeEnum, event) {
    this._clearScreen();

    this.selectedScheduleType = scheduleType;
    setTimeout(
      () => {
        this._showCards(scheduleType, event);
      }, 500
    );

  }

  private _showCards(scheduleType: ScheduleTypeEnum, event) {
    switch (scheduleType) {
      case ScheduleTypeEnum.GROUP_SCHEDULE: {
        this._getCardsByClass(event);
        break;
      }
      case ScheduleTypeEnum.STUDENT_SCHEDULE: {
        this._getCardsByStudentId(event);
        break;
      }
      case ScheduleTypeEnum.TEACHER_SCHEDULE: {
        this._getCardsByTeacher(event);
        break;
      }
      case ScheduleTypeEnum.CLASSROOM_SCHEDULE: {
        this._getCardsByClassroom(event);
        break;
      }
      default: {
        this._clearScreen();
        break;
      }
    }
  }

  private _clearScreen() {
    this.displayCards = [];
    this.scheduleTitle = '...';
  }

  private _showNotFoundMessage(errorMessage?: string, error?) {
    if (errorMessage) {
      console.warn(errorMessage, error);
    }
    this.scheduleTitle = 'Nije pronađen nijedan raspored';
  }

  private _getCardsByTeacher(teacher) {
    this.cardService.getCardsByTeacherId(teacher.id).subscribe(
      (cards: CardModel[]) => {
        if (cards.length !== 0) {
          this.scheduleTitle = 'Predavač ' + teacher.name;
          this._getDisplayCards(cards);
        } else {
          this._showNotFoundMessage();
        }
      }, error => {
        this._showNotFoundMessage('There was an error trying to get the cards of the teacher ' + teacher.id, error);
        console.warn();
      });
  }

  private _getCardsByStudentId(studentId) {
    this.cardService.getCardsByStudentId(studentId).subscribe(
      (cards: CardModel[]) => {
        if (cards.length !== 0) {
          this.scheduleTitle = 'Učenik ' + studentId;
          this._getDisplayCards(cards);
        } else {
          this._showNotFoundMessage();
        }
      }, error => {
        this._showNotFoundMessage('There was an error trying to get the cards of the student ' + studentId, error);
      });
  }

  private _getCardsByClassroom(classroom: ClassroomModel) {
    this.cardService.getCardsByClassroomId(classroom.id).subscribe(
      (cards: CardModel[]) => {
        if (cards.length !== 0) {
          this.scheduleTitle = 'Učionica ' + classroom.short;
          this._getDisplayCards(cards);
        } else {
          this._showNotFoundMessage();
        }
      }, error => {
        this._showNotFoundMessage('There was an error trying to get the cards of the classroom ' + classroom.id, error);
      });
  }

  private _getCardsByClass(classModel: ClassModel) {
    this.cardService.getCardsByClassId(classModel.id).subscribe(
      (cards: CardModel[]) => {
        if (cards.length !== 0) {
          this.scheduleTitle = 'Odeljenja ' + classModel.short;
          this._getDisplayCards(cards);
        } else {
          this._showNotFoundMessage();
        }
      }, error => {
        this._showNotFoundMessage('There was an error trying to get the cards of the classes ' + classModel.id, error);
      });
  }

  private _getDisplayCards(cards: CardModel[]) {
    if (cards) {
      const displayCards = [];
      let lastCard = CardService.getEmptyCard();
      let newCard: DisplayCard;
      cards.forEach(
        (card) => {
          if (lastCard.lesson.id === card.lesson.id &&
            lastCard.day === card.day) {
            if (+newCard.endPeriod < +card.period) {
              newCard.endPeriod = card.period;
            }
          } else {
            if (newCard) {
              displayCards.push(newCard);
            }
            newCard = new DisplayCard(card, card.period, card.period);
          }
          lastCard = card;
        }
      );
      if (newCard) {
        displayCards.push(newCard);
      }
      this.displayCards = displayCards;
    }
  }
}
