import { Component, Input } from '@angular/core';
import { FirebaseToAppService } from '../firebase-to-app.service';
import { AdriansService } from '../adrians.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  providers: [ FirebaseToAppService, AdriansService ]
})
export class PieChartComponent {
  @Input() childChartCards: any[];

  constructor(public fbaService: FirebaseToAppService, public aService: AdriansService) {

  }

  public data: number[];
  public pieChartLabels:string[] = ['Land', 'Creature', 'Enchantment', 'Instant', 'Sorcery', 'Artifact', 'Planeswalker'];
  public pieChartData:number[] = [1,1,1,1,1,1,1];
  public pieChartType:string = 'pie';

  chartClicked(e:any):void {
    console.log(e);
  }

  chartHovered(e:any):void {
    console.log(e);
  }

  resetGraph() {
    this.pieChartData = this.aService.getCardTypes(this.childChartCards);
  }
}
