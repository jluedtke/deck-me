import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Deck } from '../deck.model';
import { FirebaseToAppService } from '../firebase-to-app.service';



@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss'],
  providers: [FirebaseToAppService]
})
export class CardDisplayComponent implements OnInit {
  @Input() cardsToDisplay: any[];
  @Input() childDeck: any;
  @Output() clickSender = new EventEmitter();
  cardImage: string;

  cardTypes: string[] = ["Creature", "Artifact", "Enchantment", "Instant", "Sorcery", "Planeswalker", "Land"];
  // cardsToDisplay: any[];

  constructor(public fbaService: FirebaseToAppService) {
  }

  ngOnInit() {
  }

  getImage(card: any) {
    this.cardImage = card;
  }

  removeCard(card: any) {
    this.clickSender.emit(card);
  }
}
