import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CardModel} from '../models/card.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {LessonModel} from '../models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) {
  }

  static getEmptyCard() {
    return new CardModel([], '', new LessonModel('', null, null, null, null, null, null, null, null, null), null, null, null);
  }

  getCardsByTeacherId(id): Observable<CardModel[]> {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get<CardModel[]>('/api/teachers/cards', {params}).pipe(
      map((x: any) => x.cards)
    );

  }

  getCardsByClassroomId(id): Observable<CardModel[]> {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get<CardModel[]>('/api/classrooms/cards', {params}).pipe(
      map((x: any) => x.cards)
    );

  }

  getCardsByStudentId(studentId): Observable<CardModel[]> {
    let params = new HttpParams();
    params = params.append('id', studentId);
    return this.http.get<CardModel[]>('/api/students/cards', {params}).pipe(
      map((x: any) => x.cards)
    );

  }
}
