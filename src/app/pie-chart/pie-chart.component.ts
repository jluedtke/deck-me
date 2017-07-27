import { Component, Input, OnChanges } from '@angular/core';
import { FirebaseToAppService } from '../firebase-to-app.service';
import { AdriansService } from '../adrians.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  providers: [ FirebaseToAppService, AdriansService ]
})
export class PieChartComponent implements OnChanges {
  @Input() chartData: any[];

  constructor(public fbaService: FirebaseToAppService, public aService: AdriansService) {

  }

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

  public data: number[];
  public pieChartLabels:string[] = ['Land', 'Creature', 'Enchantment', 'Instant', 'Sorcery', 'Artifact', 'Planeswalker'];
  public pieChartData:number[] = [1,1,1,1,1,1,1];
  public pieChartType:string = 'pie';
  public pieChartLegend:boolean = false;
  chartClicked(e:any):void {
    console.log(e);
  }

  chartHovered(e:any):void {
    console.log(e);
  }
}
