import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdGridListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { masterFirebaseConfig } from './api-keys';
import { masterAuthConfig } from './api-keys'; //Firebase Auth Config var
import { AuthenticationService } from './authentication.service';
import { AuthGaurdService } from './auth-gaurd.service'; //AuthGaurdService
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'; //authmod
import { DeckbuilderComponent } from './deckbuilder/deckbuilder.component';
import { SearchComponent } from './search/search.component';
import { CardDisplayComponent } from './card-display/card-display.component';
import { DeckChartComponent } from './deck-chart/deck-chart.component';
import { ExportDeckFormComponent } from './export-deck-form/export-deck-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DeckListComponent } from './deck-list/deck-list.component';
import { AboutComponent } from './about/about.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

export const authConfig = {
  apiKey: masterAuthConfig.apiKey,
  authDomain: masterAuthConfig.authDomain,
  databaseURL: masterAuthConfig.databaseURL,
  storageBucket: masterAuthConfig.storageBucket
}; //Firebase Auth Config ref

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeckbuilderComponent,
    SearchComponent,
    CardDisplayComponent,
    DeckChartComponent,
    ExportDeckFormComponent,
    UserProfileComponent,
    DeckListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig), //change for auth instance
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdGridListModule,
    AngularFireAuthModule //imported
  ],
  providers: [ AuthGaurdService, AuthenticationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
