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
  tiles = [
   {text: 'One', cols: 1, rows: 3, color: 'lightblue', height: '100px;'},
   {text: 'Two', cols: 3, rows: 1, color: 'lightgreen', height: '300px;'},
   {text: 'Three', cols: 3, rows: 1, color: 'lightpink', height: '300px;'},
   {text: 'Four', cols: 3, rows: 1, color: '#DDBDF1', height: '300px;'},
 ];


  updatedDeck: Deck;

  constructor(private fbaService: FirebaseToAppService) { }

  ngOnInit() {
    if (this.updatedDeck == null) {
      this.updatedDeck = new Deck([], "New Deck");
    }
  }

  addToDeck(cardId: string) {
    this.updatedDeck.cards.push(cardId);
    let deckId = this.updatedDeck.name;
    this.fbaService.updateDeck(this.updatedDeck, deckId);
  }

}
