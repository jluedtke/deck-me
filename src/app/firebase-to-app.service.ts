import { Injectable } from '@angular/core';
import { Deck } from './deck.model';
import { Http, Response } from '@angular/http';
import { Card } from './card.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseToAppService {
  decks: FirebaseListObservable<any[]>;
  cards: FirebaseListObservable<any[]>;
  deckToUpdate: FirebaseListObservable<any[]>;
  cardName: string;

  constructor(private database: AngularFireDatabase, private http: Http) {
    this.decks = this.database.list('Decks');
    this.cards = this.database.list('Cards');
  }

  getCards() {
    return this.http.get("https://api.magicthegathering.io/v1/cards?name=" + this.cardName + "&pageSize=5")
  }

  filterByName(name: string) {
    this.cardName = name;
  }

  getDecks() {
    return this.decks;
  }

  updateDeck(deck: Deck, deckId: string) {
    this.decks.update(deckId, deck);
  }

  addCard(newCard: Card) {
    let cardId = newCard.multiverseid.toString();
    this.cards.update(cardId, newCard);
  }

}
