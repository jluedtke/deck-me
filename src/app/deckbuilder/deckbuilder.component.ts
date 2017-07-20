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
  updatedDeck: Deck;

  constructor(private fbaService: FirebaseToAppService) { }

  ngOnInit() {
    if (this.updatedDeck == null) {
      this.updatedDeck = new Deck([], "New Deck");
    }
  }

  addToDeck(cardId: string) {
    this.updatedDeck.cards.push(cardId);
    this.fbaService.updateDeck(this.updatedDeck);
  }

  setUpdatedDeck(deck: Deck) {
    this.updatedDeck = deck;
    console.log(this.updatedDeck.name);
  }

  // get updatedDeck or something from decklist
}
