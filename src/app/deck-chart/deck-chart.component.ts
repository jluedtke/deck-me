import { Component, Input } from '@angular/core';
import { FirebaseToAppService } from '../firebase-to-app.service';
import { AdriansService } from '../adrians.service';


@Component({
  selector: 'app-deck-chart',
  templateUrl: './deck-chart.component.html',
  styleUrls: ['./deck-chart.component.scss']
})
export class DeckChartComponent {
  @Input() chartCards: any;
  barChartData =  this.aService.getCardManaCost(this.chartCards);

  constructor(public fbaService: FirebaseToAppService, public aService: AdriansService) {
  }

}
