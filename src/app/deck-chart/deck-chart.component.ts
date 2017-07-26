import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deck-chart',
  templateUrl: './deck-chart.component.html',
  styleUrls: ['./deck-chart.component.scss']
})
export class DeckChartComponent {
  @Input() chartCards: any;

  constructor() { }

}
