import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {StudentCardComponent} from './student-card/student-card.component';
import {StudentService} from './service/student.service';
import {HttpClientModule} from '@angular/common/http';
import { NewStudentViewComponent } from './new-student-view/new-student-view.component';
import { StudentDetailsViewComponent } from './student-details-view/student-details-view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AuthGuard} from './service/auth-guard.service';
import {FormsModule} from "@angular/forms";

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    TopBarComponent,
    StudentCardComponent,
    NewStudentViewComponent,
    StudentDetailsViewComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    StudentService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
