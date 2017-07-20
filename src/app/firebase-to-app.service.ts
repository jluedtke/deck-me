import { Injectable } from '@angular/core';
import { Deck } from './deck.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FirebaseToAppService {
  cardsFirst10: FirebaseListObservable<any[]>;
  cardIds: any[];
  nameSubject: Subject<any>;

  constructor(private database: AngularFireDatabase) {
    this.nameSubject = new Subject();
    this.cardsFirst10 = database.list('/Cards', {
      query: {
        orderByChild: 'name',
        startAt: this.nameSubject,
        limitToFirst: 3,
      }
    });
  }

  filterBy(name: string) {
    this.nameSubject.next(name);
  }

  getCards() {
    return this.cardsFirst10;
  }



  getCardById(cardId: string) {
    return this.database.object('/Cards/' + cardId);
  }

}
