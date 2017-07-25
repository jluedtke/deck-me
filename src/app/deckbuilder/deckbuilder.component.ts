import { Component, OnInit } from '@angular/core';
import { FirebaseToAppService } from '../firebase-to-app.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Deck } from '../deck.model';
import { Card } from '../card.model';
import { AuthenticationService } from '../authentication.service';



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

  constructor(private fbaService: FirebaseToAppService, private authService: AuthenticationService) { }

  ngOnInit() {
    if (this.updatedDeck == null) {
      this.updatedDeck = new Deck([], "wNxVre4mWe", this.authService.afAuth.auth.currentUser.uid);
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
          if (i == this.updatedDeck.cards.length - 1) {

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
    console.log(this.masterCardsToDisplay);
  }


}
