import {ClassModel} from './class.model';
import {ClassroomModel} from './classroom.model';
import {TeacherModel} from './teacher.model';
import {StudentModel} from './student.model';

export class LessonModel {
  public id: string;
  public classes: ClassModel[];
  public dayDef: DayDefModel;
  public classrooms: ClassroomModel[];
  public periodsPerCard: string;
  public periodsPerWeek: string;
  public seminarGroup: string;
  public subject: SubjectModel;
  public teachers: TeacherModel[];
  public student: StudentModel[];

  constructor(id, classes, dayDef, classrooms, periodsPerCard, periodsPerWeek, seminarGroup, subject, teachers, student) {
    this.id = id;
    this.classes = classes;
    this.dayDef = dayDef;
    this.classrooms = classrooms;
    this.periodsPerCard = periodsPerCard;
    this.periodsPerWeek = periodsPerWeek;
    this.seminarGroup = seminarGroup;
    this.subject = subject;
    this.teachers = teachers;
    this.student = student;
  }
}
