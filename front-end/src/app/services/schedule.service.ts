import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PeriodModel} from '../models/period.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) {
  }

  getPeriods(): Observable<PeriodModel[]> {
    return this.http.get<PeriodModel>('/api/schedule/periods')
      .pipe(
        map((x: any) => x.periods)
      );
  }
  getDayDefs(): Observable<DayDefModel[]> {
    return this.http.get<DayDefModel>('/api/schedule/daysDefs')
      .pipe(
        map((x: any) => x.dayDefs)
      );
  }
}
