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


  constructor(private fbaService: FirebaseToAppService) { }

  ngOnInit() {
  }

  submitForm(deckName: string) {
    var newDeck = new Deck(this.childDeckToSave.cards, deckName);
    this.fbaService.createDeck(newDeck);
  }

  //NOTE: fix placeholder name stuff, blah blah blah my brain hurts
}
