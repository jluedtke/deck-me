import { Component, Input } from '@angular/core';
import { FirebaseToAppService } from '../firebase-to-app.service';
import { AdriansService } from '../adrians.service';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent {
  @Input() childBarData: any[];

  constructor(public fbaService: FirebaseToAppService, public aService: AdriansService) {
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['0', '1', '2', '3', '4', '5', '6', '7+'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;

  public barChartData:any[] = this.childBarData;

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  // public resetGraph() {
  //   this.barChartData = this.aService.getCardManaCost(this.childChartCards);
  //   console.log(this.barChartData);
  // }

}
