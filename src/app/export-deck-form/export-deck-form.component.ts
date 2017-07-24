import { Component, OnInit, Input } from '@angular/core';
import { FirebaseToAppService } from '../firebase-to-app.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Deck } from '../deck.model';
import { Card } from '../card.model';


@Component({
  selector: 'app-export-deck-form',
  templateUrl: './export-deck-form.component.html',
  styleUrls: ['./export-deck-form.component.scss'],
  providers: [FirebaseToAppService]
})
export class ExportDeckFormComponent implements OnInit {
  @Input() childDeckToSave: Deck;
  @Input() childTempDeck: Deck;


  constructor(private fbaService: FirebaseToAppService) { }

  ngOnInit() {
  }

  submitForm(deckName: string) {
    var newDeck = new Deck(this.childDeckToSave.cards, deckName);
    this.fbaService.updateDeck(newDeck);
  }

  submitUpdateForm(deckName: string) {
    this.childDeckToSave.name = deckName;
    this.fbaService.updateDeck(this.childDeckToSave);
  }
}
