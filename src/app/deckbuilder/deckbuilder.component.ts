import { Component, OnInit } from '@angular/core';
import { FirebaseToAppService } from '../firebase-to-app.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Deck } from '../deck.model';
import { Card } from '../card.model';
import { AuthenticationService } from '../authentication.service';
import { AdriansService } from '../adrians.service';



@Component({
  selector: 'app-deckbuilder',
  templateUrl: './deckbuilder.component.html',
  styleUrls: ['./deckbuilder.component.scss'],
  providers: [FirebaseToAppService, AuthenticationService]
})
export class DeckbuilderComponent implements OnInit {
  // styles array
  updatedDeck: Deck;
  masterCardsToDisplay: any[];
  otherCards: any[];
  outputCounts: any[];
  cardForCharts: any[];

  constructor(private fbaService: FirebaseToAppService, private authService: AuthenticationService, private aService: AdriansService) { }

  ngOnInit() {
    if (this.updatedDeck == null) {
      this.updatedDeck = new Deck([], "wNxVre4mWe", this.authService.afAuth.auth.currentUser.uid);
    }
  }

  addToDeck(cardId: string) {
    if (this.updatedDeck.cards) {
      this.updatedDeck.cards.push(cardId);
    } else {
      this.setEmptyDeck(this.updatedDeck, cardId);
      return;
    }
    this.fbaService.updateDeck(this.updatedDeck);
    this.getCardsToDisplay();
  }

  setEmptyDeck(deck: any, cardId: string) {
    this.updatedDeck = new Deck([cardId], deck.name, deck.uid);
    this.fbaService.removeDeck(deck);
    this.fbaService.updateDeck(this.updatedDeck);
    this.setUpdatedDeck(this.updatedDeck);
  }

  setUpdatedDeck(deck: Deck) {
    this.updatedDeck = deck;
    this.getCardsToDisplay();
  }

  getCardsToDisplay() {
    this.masterCardsToDisplay =[];
    this.cardForCharts = [];

 

    if (this.updatedDeck && this.updatedDeck.cards) {

      for (let i = 0; i < this.updatedDeck.cards.length; i++) {
        this.fbaService.getCardById(this.updatedDeck.cards[i]).subscribe(data => {
          this.masterCardsToDisplay.push(data);
          this.cardForCharts.push(data);
          if (i == this.updatedDeck.cards.length - 1) {
            this.aService.getCardTypes(this.cardForCharts);
            this.countRepeats();
          }
        });
      }
    }
  }

  countRepeats() {
    this.otherCards = this.masterCardsToDisplay;
    this.outputCounts = [];
    for (let i = 0; i < this.otherCards.length; i++) {
      let counter: number = 0;
      for (let ii = 0; ii < this.masterCardsToDisplay.length; ii++) {
        if (this.otherCards[i].name == this.masterCardsToDisplay[ii].name) {
          counter ++;
        }
      }
      this.outputCounts.push(counter);
    }

    for (let x = 0; x < this.outputCounts.length; x++) {
      for (let y = 0; y < this.outputCounts.length; y++) {
        if (x == y) {
          continue;
        } else {
          if (this.outputCounts[x] == this.outputCounts[y] && this.otherCards[x].name == this.otherCards[y].name) {
            this.outputCounts.splice(y, 1);
            this.otherCards.splice(y, 1);
            y--;
          }
        }
      }
    }

    for (let j = 0; j < this.outputCounts.length; j++) {
        this.otherCards[j].count = this.outputCounts[j];
    }
  }

  setRemoveCard(card: any) {
    this.fbaService.getCardToRemove(this.updatedDeck, card);
    this.setUpdatedDeck(this.updatedDeck);

  }

}
