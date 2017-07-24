import { Component, OnInit } from '@angular/core';
import { FirebaseToAppService } from '../firebase-to-app.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Deck } from '../deck.model';
import { Card } from '../card.model';


@Component({
  selector: 'app-deckbuilder',
  templateUrl: './deckbuilder.component.html',
  styleUrls: ['./deckbuilder.component.scss'],
  providers: [FirebaseToAppService]
})
export class DeckbuilderComponent implements OnInit {
  // styles array
  updatedDeck: Deck;
  deckToSave: Deck = this.updatedDeck;

  constructor(private fbaService: FirebaseToAppService) { }

  ngOnInit() {
    if (this.updatedDeck == null) {
      this.updatedDeck = new Deck([], "wNxVre4mWe");
    }
  }

  addToDeck(cardId: string) {
    this.updatedDeck.cards.push(cardId);
    // this.deckToSave = this.updatedDeck;
    this.fbaService.updateDeck(this.updatedDeck);
  }

  setUpdatedDeck(deck: Deck) {
    console.log("boop");
    this.updatedDeck = deck;
    // this.deckToSave = this.updatedDeck;
    console.log(this.updatedDeck.name);
  }

}
