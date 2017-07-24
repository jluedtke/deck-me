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
  otherCards: any[];
  outputCounts: any[];

  cardTypes: string[] = ["Creature", "Artifact", "Enchantment", "Instant", "Sorcery", "Planeswalker", "Land"];
  // cardsToDisplay: any[];

  constructor(public fbaService: FirebaseToAppService) {
  }

  ngOnInit() {
  }

  countRepeats() {
    this.otherCards = this.cardsToDisplay;
    this.outputCounts = [];
    for (let i = 0; i < this.otherCards.length; i++) {
      let counter: number = 0;
      for (let ii = 0; ii < this.cardsToDisplay.length; ii++) {
        if (this.otherCards[i].name == this.cardsToDisplay[ii].name) {
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
          if (this.outputCounts[x] == this.outputCounts[y]) {
            this.outputCounts.splice(y, 1);
            this.otherCards.splice(y, 1);
            y--;
          }
        }
      }
    }

    console.log(this.outputCounts);
    console.log(this.otherCards);
  }

}
