import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './navbar/navbar.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {CardComponent} from './card/card.component';
import {TeacherContentCardComponent} from './card/content-cards/teacher-content-card/teacher-content-card.component';
import {TeacherSearchComponent} from './search-bar/teacher-search/teacher-search.component';
import {StudentSearchComponent} from './search-bar/student-search/student-search.component';
import {StudentContentCardComponent} from './card/content-cards/student-content-card/student-content-card.component';
import {ClassroomSearchComponent} from './search-bar/classroom-search/classroom-search.component';
import {ClassroomContentCardComponent} from './card/content-cards/classroom-content-card/classroom-content-card.component';
import {ClassSearchComponent} from './search-bar/class-search/class-search.component';
import {ProxyInterceptor} from './interceptors/proxy.interceptor';

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
    ClassSearchComponent
  ],
  imports: [
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
