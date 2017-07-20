import { Component, Output, EventEmitter } from '@angular/core';
import { FirebaseToAppService } from '../firebase-to-app.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Card } from '../card.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [FirebaseToAppService]
})
export class SearchComponent {
  cards:any[] = null;
  firstInCards: any = null;
  @Output() clickSender = new EventEmitter();


  constructor(private fbaService: FirebaseToAppService) { }


  //Form search stuff
  searchForCard(name: string) {
    this.fbaService.filterByName(name);
    this.fbaService.getCards().subscribe(data => {
      this.cards = data.json().cards;
      this.firstInCards = this.cards[0]
    });
  }

  setFirstInCards(card) {
    this.firstInCards = card;
  }

  addCardToDB(card) {
    if (card.subtypes == null) {
      var cardSubtypes: string[] = null;
    } else {
      var cardSubtypes: string[] = card.subtypes;
    }
    if (card.flavor == null) {
      var cardFlavor: string = null;
    } else {
      var cardFlavor: string = card.flavor;
    }
    if (card.power == null) {
      var cardPower: string = null;
    } else {
      var cardPower: string = card.power;
    }
    if (card.toughness == null) {
      var cardToughness: string = null;
    } else {
      var cardToughness: string = card.toughness;
    }
    if (card.colors == null) {
      var cardColors: string[] = null;
    } else {
      var cardColors: string[] = card.colors;
    }
    if (card.colorIdentity == null) {
      var cardColorID: string[] = null;
    } else {
      var cardColorID: string[] = card.colorIdentity;
    }
    if (card.manaCost == null) {
      var cardManaCost: string = null;
    } else {
      var cardManaCost: string = card.manaCost;
    }
    if (card.cmc == null) {
      var cardConvertManaCost: number = null;
    } else {
      var cardConvertManaCost: number = card.cmc;
    }
    if (card.text == null) {
      var cardText: string = null;
    } else {
      var cardText: string = card.text;
    }
    if (card.name == null) {
      var cardName: string = null;
    } else {
      var cardName: string = card.name;
    }
    if (card.type == null) {
      var cardType: string = null;
    } else {
      var cardType: string = card.type;
    }
    if (card.types == null) {
      var cardTypes: string[] = null;
    } else {
      var cardTypes: string[] = card.types;
    }
    if (card.rarity == null) {
      var cardRarity: string = null;
    } else {
      var cardRarity: string = card.rarity;
    }
    if (card.set == null) {
      var cardSet: string = null;
    } else {
      var cardSet: string = card.set;
    }
    if (card.setName == null) {
      var cardSetName: string = null;
    } else {
      var cardSetName: string = card.setName;
    }
    if (card.artist == null) {
      var cardArtist: string = null;
    } else {
      var cardArtist: string = card.artist;
    }
    if (card.layout == null) {
      var cardLayout: string = null;
    } else {
      var cardLayout: string = card.layout;
    }
    if (card.imageUrl == null) {
      var cardImageUrl: string = null;
    } else {
      var cardImageUrl: string = card.imageUrl;
    }
    if (card.multiverseid == null) {
      var cardMultiverseID: number = null;
    } else {
      var cardMultiverseID: number = card.multiverseid;
    }
    if (card.legalities == null) {
      var cardLegalities: any[] = null;
    } else {
      var cardLegalities: any[] = card.legalities;
    }
    var foundCard = new Card(
      cardName,
      cardManaCost,
      cardConvertManaCost,
      cardColors,
      cardColorID,
      cardType,
      cardTypes,
      cardSubtypes,
      cardRarity,
      cardSet,
      cardSetName,
      cardText,
      cardFlavor,
      cardArtist,
      cardPower,
      cardToughness,
      cardLayout,
      cardImageUrl,
      cardMultiverseID,
      cardLegalities
    )
    console.log("Added");
    this.fbaService.addCard(foundCard);
  }

  addToDeckClicked(id: number) {
    this.clickSender.emit(id.toString());
  }

}
