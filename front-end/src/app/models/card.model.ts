import {ClassroomModel} from './classroom.model';
import {LessonModel} from './lesson.model';

export class CardModel {
  public classrooms: ClassroomModel;
  public day: string;
  public lesson: LessonModel;
  public period: string;
  public term: string;
  public weeks: string;

  constructor(classrooms, day, lesson, period, term, weeks) {
    this.classrooms = classrooms;
    this.day = day;
    this.lesson = lesson;
    this.period = period;
    this.term = term;
    this.weeks = weeks;
  }
}
