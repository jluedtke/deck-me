import { Component, OnInit } from '@angular/core';
import { FirebaseToAppService } from '../firebase-to-app.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [FirebaseToAppService]
})
export class SearchComponent implements OnInit {
  cards:any[] = null;
  firstInCards: any = null;


  constructor(private fbaService: FirebaseToAppService) { }

  ngOnInit() {
    // this.cards = this.fbaService.getCards();
  }

  //Form search stuff
  searchForCard(name: string) {
    this.fbaService.filterByName(name);
    this.fbaService.getCards().subscribe(data => {
      this.cards = data.json().cards;
      this.firstInCards = this.cards[0]
      console.log(this.firstInCards);
    });
  }

  setFirstInCards(card) {
    this.firstInCards = card;
  }

  addCardToDeck(card) {
    console.log(card);
  }

}
