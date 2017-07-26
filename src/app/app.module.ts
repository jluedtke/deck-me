import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule, MdChipsModule, MdTooltipModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { masterFirebaseConfig } from './api-keys';
import { AuthenticationService } from './authentication.service';
import { FirebaseToAppService } from './firebase-to-app.service';
import { AdriansService } from './adrians.service';
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
import { FilterByTypePipe } from './filter-by-type.pipe';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

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
    AboutComponent,
    FilterByTypePipe,
    PieChartComponent,
    DoughnutChartComponent
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
    MdInputModule,
    MdChipsModule,
    AngularFireAuthModule,
    ChartsModule,
    MdTooltipModule,
  ],
  providers: [ AuthGaurdService, AuthenticationService, FirebaseToAppService, AdriansService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
