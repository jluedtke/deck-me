import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurdService } from './auth-gaurd.service';
import { HomeComponent } from './home/home.component';
import { DeckbuilderComponent } from './deckbuilder/deckbuilder.component';
import { SearchComponent } from './search/search.component';
import { CardDisplayComponent } from './card-display/card-display.component';
import { DeckChartComponent } from './deck-chart/deck-chart.component';
import { ExportDeckFormComponent } from './export-deck-form/export-deck-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DeckListComponent } from './deck-list/deck-list.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'deckbuilder',
    component: DeckbuilderComponent,
    canActivate: [ AuthGaurdService ]
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [ AuthGaurdService ]
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [ AuthGaurdService ]
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

export const appRoutingProviders: any[] = [];
