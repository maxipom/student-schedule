import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './components/core/navbar/navbar.component';
import {ScheduleComponent} from './components/schedule/schedule.component';
import {CardComponent} from './components/card/card.component';
import {TeacherContentCardComponent} from './components/card/content-cards/teacher-content-card/teacher-content-card.component';
import {TeacherSearchComponent} from './components/search-bar/teacher-search/teacher-search.component';
import {StudentSearchComponent} from './components/search-bar/student-search/student-search.component';
import {StudentContentCardComponent} from './components/card/content-cards/student-content-card/student-content-card.component';
import {ClassroomSearchComponent} from './components/search-bar/classroom-search/classroom-search.component';
import {ClassroomContentCardComponent} from './components/card/content-cards/classroom-content-card/classroom-content-card.component';
import {ClassSearchComponent} from './components/search-bar/class-search/class-search.component';
import {ProxyInterceptor} from './interceptors/proxy.interceptor';
import {NgxPrintModule} from 'ngx-print';
import { FooterComponent } from './components/core/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
    NavbarComponent,
    ScheduleComponent,
    CardComponent,
    TeacherContentCardComponent,
    TeacherSearchComponent,
    StudentSearchComponent,
    StudentContentCardComponent,
    ClassroomSearchComponent,
    ClassroomContentCardComponent,
    ClassSearchComponent,
    FooterComponent
  ],
  imports: [
    NgxPrintModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ProxyInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
