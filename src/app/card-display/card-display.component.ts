import { Component, OnInit, Input } from '@angular/core';
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
  cardTypes: string[] = ["Creature", "Artifact", "Enchantment", "Instant", "Sorcery", "Planeswalker", "Land"];
  // cardsToDisplay: any[];

  constructor(public fbaService: FirebaseToAppService) {
  }

  ngOnInit() {
  }

}
