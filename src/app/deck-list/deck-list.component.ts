import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseToAppService } from '../firebase-to-app.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Deck } from '../deck.model';


@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.scss'],
  providers: [FirebaseToAppService]
})
export class DeckListComponent implements OnInit {
  decksFromFirebase: any[] //From users eventually
  @Output() clickSender = new EventEmitter();

  constructor(private fbaService: FirebaseToAppService) {
    this.fbaService.getDecks().subscribe(data => {
      this.decksFromFirebase = data;
    });
  }

  ngOnInit() {
  }

  updateDeckClicked(deck: Deck) {
    this.clickSender.emit(deck);
  }

  createNewDeck() {
    var newDeck = new Deck([], "wNxVre4mWe");
    this.clickSender.emit(newDeck);
  }

}
