import { Component, Input } from '@angular/core';
import { FirebaseToAppService } from '../firebase-to-app.service';
import { AdriansService } from '../adrians.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  providers: [ FirebaseToAppService ]
})
export class PieChartComponent {
  @Input() childChartCards: any[];

  constructor(public fbaService: FirebaseToAppService, public aService: AdriansService) {

  }

  public data: number[];
  public pieChartLabels:string[] = ['Land', 'Creature', 'Enchantment', 'Instant', 'Sorcery', 'Artifact', 'Planeswalker'];
  public pieChartData:number[] = [10,10,10,10,10,10, 10];
  public pieChartType:string = 'pie';

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public resetGraph() {
    this.pieChartData = this.aService.getCardTypes(this.childChartCards);
    console.log(this.data);
  }
}
