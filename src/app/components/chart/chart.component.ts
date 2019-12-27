import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  // Chart properties
  public horizontalLabel = 'Date';
  public verticalLabel = 'Value';
  public colors = { domain: ['red', 'teal', 'skyblue', 'orange', 'blue'] };
  @Input() chartData: Array<any>;
}
