import { Injectable } from '@angular/core';
import { Deck } from './deck.model';
import { Http, Response } from '@angular/http';
import { Card } from './card.model';
import { User } from './user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from './authentication.service';



@Injectable()
export class FirebaseToAppService {
  decks: FirebaseListObservable<any[]>;
  cards: FirebaseListObservable<any[]>;
  users: FirebaseListObservable<any[]>;
  deckToUpdate: FirebaseListObservable<any[]>;
  cardName: string;

  constructor(private database: AngularFireDatabase, private http: Http, private authService: AuthenticationService) {
    this.decks = this.database.list('Decks', {
      query: {
        orderByChild: 'uid',
        equalTo: this.authService.afAuth.auth.currentUser.uid
      }
    });
    this.users = this.database.list('Users');
    this.database.list('Decks').remove("wNxVre4mWe");
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

  updateDeck(deck) {
    if (!deck.$key || deck.name == "wNxVre4mWe") {
      this.createDeck(deck);
    } else {
      var userDeckInFirebase = this.getDeckById(deck.$key);
      userDeckInFirebase.update({
        cards: deck.cards,
        name: deck.name
      });
    }
  }

  getDeckById(deckId: string) {
    return this.database.object('Decks/' + deckId);
  }

  createDeck(deck) {
    if (deck.name == "wNxVre4mWe") {
      this.decks.update("wNxVre4mWe", deck);
      return;
    }
    if (!deck.$key) {
      this.decks.push(deck);
    } else {
      this.decks.update(deck.$key, deck);
    }
  }

  addCard(newCard: Card) {
    let cardId = newCard.multiverseid.toString();
    this.cards.update(cardId, newCard);
  }

  getCardById(cardId: string) {
    return this.database.object('Cards/' + cardId);
  }

  createUser(user: User) {
    this.users.push(user);
  }

  removeDeck(deck: any) {
    this.database.object('Decks/' + deck.$key).remove();
  }

  getCardToRemove(deck: any, card: any) {
    for (let i = 0; i < deck.cards.length; i++) {
      if (deck.cards[i] == card.multiverseid) {
        deck.cards.splice(i, 1);
        break;
      }
    }

    var userDeckInFirebase = this.getDeckById(deck.$key);
    userDeckInFirebase.update({
      cards: deck.cards,
      name: deck.name
    });
  }

}
