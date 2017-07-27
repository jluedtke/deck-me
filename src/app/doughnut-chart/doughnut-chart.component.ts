import { Component, Input } from '@angular/core';
import { AdriansService } from '../adrians.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  providers: [ AdriansService ]
})
export class DoughnutChartComponent {
  @Input() childCards: any[];

  constructor(public aService: AdriansService) { }

  // Doughnut
  public doughnutChartLabels:string[] = ['Red', 'Blue', 'Duals', 'White', 'Green', 'Black'];
  public doughnutChartData:number[] = [1,1,1,1,1,1];
  public doughnutChartType:string = 'doughnut';

  // events
  chartClicked(e:any):void {
    console.log(e);
  }

  chartHovered(e:any):void {
    console.log(e);
  }

  resetGraph() {
    this.doughnutChartData = this.aService.getCardColors(this.childCards);
  }
}
