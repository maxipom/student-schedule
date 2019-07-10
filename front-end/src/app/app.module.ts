import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CardComponent } from './card/card.component';
import { TeacherContentCardComponent } from './card/content-cards/teacher-content-card/teacher-content-card.component';
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
    TeacherContentCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
