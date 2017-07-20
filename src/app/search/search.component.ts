import { Component, OnInit } from '@angular/core';
import { FirebaseToAppService } from '../firebase-to-app.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [FirebaseToAppService]
})
export class SearchComponent implements OnInit {
  cards: any[];


  constructor(private fbaService: FirebaseToAppService) { }

  ngOnInit() {
    this.cards = this.fbaService.getCards();
  }

  //Form search stuff
  searchForCard(name: string) {
    console.log(this.cards);
  }

}
