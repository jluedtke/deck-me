import { Component } from '@angular/core';
import { FirebaseToAppService } from '../firebase-to-app.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  providers: [ FirebaseToAppService ]
})
export class PieChartComponent {

  decks;

  constructor(public fbaService: FirebaseToAppService) {
    this.decks = fbaService.getDecks();
    console.log(this.decks);
  }

  public pieChartLabels:string[] = ['Land', 'Creature', 'Enchantment', 'Instant', 'Sorcery', 'Artifact', 'Planeswalker'];
  public pieChartData:number[] = [25, 15, 6, 6, 8, 0, 0];
  public pieChartType:string = 'pie';

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
