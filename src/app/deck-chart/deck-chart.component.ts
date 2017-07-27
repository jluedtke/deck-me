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
  @Input() childBarChartData: any[];
  @Input() childPieChartData: any[];
  @Input() childPolarChartData: any[];
  @Input() childDoughnutChartData: any[];

  constructor(public fbaService: FirebaseToAppService, public aService: AdriansService) {
  }

}
