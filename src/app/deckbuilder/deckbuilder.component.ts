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
  masterCardsToDisplay: any[];

  constructor(private fbaService: FirebaseToAppService) { }

  ngOnInit() {
    if (this.updatedDeck == null) {
      this.updatedDeck = new Deck([], "wNxVre4mWe");
    }
  }

  addToDeck(cardId: string) {
    this.updatedDeck.cards.push(cardId);
    this.fbaService.updateDeck(this.updatedDeck);
    this.getCardsToDisplay();
  }

  setUpdatedDeck(deck: Deck) {
    this.updatedDeck = deck;
    this.getCardsToDisplay();
  }

  getCardsToDisplay() {
    this.masterCardsToDisplay =[];
    if (this.updatedDeck) {
      for (let i = 0; i < this.updatedDeck.cards.length; i++) {
        this.fbaService.getCardById(this.updatedDeck.cards[i]).subscribe(data => {
          this.masterCardsToDisplay.push(data);
        });
      }
    }
  }

}
