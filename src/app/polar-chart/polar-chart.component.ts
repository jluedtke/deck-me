import { Component, Input, OnChanges } from '@angular/core';
import { AdriansService } from '../adrians.service';

@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.component.html',
  providers: [ AdriansService ]
})
export class PolarChartComponent implements OnChanges {
  @Input() chartData: any[];

  constructor(public aService: AdriansService) { }

  ngOnChanges(changes: any) {
    if (changes.chartData.currentValue) {
      if (changes.chartData.currentValue.length < 1) {
        console.log(changes.chartData.currentValue)
      } else {
        console.log(changes.chartData.currentValue)
        this.pieChartData = changes.chartData.currentValue;
      }
    }

  }

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
}
