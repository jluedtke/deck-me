import { Injectable, OnInit } from '@angular/core';
import { Deck } from './deck.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseToAppService implements OnInit {
  cards: FirebaseListObservable<any[]>;
  cardIds: any[];

  constructor(private database: AngularFireDatabase) {
    this.cards = database.list('Cards');
  }

  ngOnInit() {
    this.cards.subscribe(data => {
      data.forEach(card => {
        this.cardIds.push(card.$key);
      });
    });
  }

  getCards() {
    return this.cardIds;
  }

  getCardById(cardId: string) {
    return this.database.object('/Cards/' + cardId);
  }

}
