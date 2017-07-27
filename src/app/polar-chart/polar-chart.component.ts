import { Component, Input } from '@angular/core';
import { AdriansService } from '../adrians.service';

@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.component.html',
  providers: [ AdriansService ]
})
export class PolarChartComponent {
  @Input() childrenCards: any[];

  constructor(public aService: AdriansService) { }

  // PolarArea
  public pieChartLabels:string[] =  ['Mythic Rare', 'Rare', 'Uncommon', 'Common'];
  public pieChartData:number[] = [1,1,1,1];
  public pieChartType:string = 'pie';

  // events
  chartClicked(e:any):void {
    console.log(e);
  }

  chartHovered(e:any):void {
    console.log(e);
  }

  resetGraph() {
    this.pieChartData = this.aService.getCardRarity(this.childrenCards);
  }
}
