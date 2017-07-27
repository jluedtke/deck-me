import { Component, Input, OnChanges } from '@angular/core';
import { AdriansService } from '../adrians.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  providers: [ AdriansService ]
})
export class DoughnutChartComponent implements OnChanges {
  @Input() chartData: any[];

  constructor(public aService: AdriansService) { }

  ngOnChanges(changes: any) {
    if (changes.chartData.currentValue) {
      if (changes.chartData.currentValue.length < 1) {
        console.log(changes.chartData.currentValue)
      } else {
        console.log(changes.chartData.currentValue)
        this.doughnutChartData = changes.chartData.currentValue;
      }
    }

  }

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
}
