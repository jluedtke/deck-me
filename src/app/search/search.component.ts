import { Component, OnInit } from '@angular/core';
import { FirebaseToAppService } from '../firebase-to-app.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [FirebaseToAppService]
})
export class SearchComponent implements OnInit {
  cards: FirebaseListObservable<any[]>;


  constructor(private fbaService: FirebaseToAppService) { }

  ngOnInit() {
    // this.cards = this.fbaService.getCards();
  }

  //Form search stuff
  searchForCard(name: string) {
    console.log("Start");
    var properString: string = name.replace(/\w\S*/g, ( text => text[0].toUpperCase() + text.substr(1).toLowerCase() ));
    this.fbaService.filterBy(properString);
    this.cards = this.fbaService.getCards();
    console.log(this.cards);
    this.cards.subscribe(data => {
      data.forEach(card => {
        console.log(card.name);
      });
    });
  }

}
