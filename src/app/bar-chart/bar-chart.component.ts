import { Component, Input, OnChanges } from '@angular/core';
import { FirebaseToAppService } from '../firebase-to-app.service';
import { AdriansService } from '../adrians.service';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements OnChanges {
  @Input() chartData: any[];

  constructor(public fbaService: FirebaseToAppService, public aService: AdriansService) {
  }

  ngOnChanges(changes: any) {
    if (changes.chartData.currentValue) {
      if (changes.chartData.currentValue.length < 1) {
        console.log(changes.chartData.currentValue)
      } else {
        console.log(changes.chartData.currentValue)
        this.barChartData = changes.chartData.currentValue;
      }
    }

  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['0', '1', '2', '3', '4', '5', '6', '7+'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;

  public barChartData:any[] = [
    {data: [1,1,1,1,1,1,1,1]},
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
