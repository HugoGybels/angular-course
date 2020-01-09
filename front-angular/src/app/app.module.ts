import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentCardComponent } from './student-card/student-card.component';
import {HttpClientModule} from '@angular/common/http';
import { StudentListComponent } from './student-list/student-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    StudentCardComponent,
    StudentListComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
