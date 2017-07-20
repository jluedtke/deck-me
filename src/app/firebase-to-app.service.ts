import { Injectable } from '@angular/core';
import { Deck } from './deck.model';
import { Http, Response } from '@angular/http';
import { Card } from './card.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseToAppService {
  decks: FirebaseListObservable<any[]>;
  cardName: string;

  constructor(private database: AngularFireDatabase, private http: Http) {
    this.decks = this.database.list('Decks');
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



  getCardById(cardId: string) {
    return this.database.object('/Cards/' + cardId);
  }

}
