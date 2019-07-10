import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CardModel} from '../models/card.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) {
  }

  getCardsByTeacherId(id): Observable<CardModel[]> {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get<CardModel[]>('/api/teachers/cards', {params}).pipe(
      map((x: any) => x.cards)
    );

  }
}
