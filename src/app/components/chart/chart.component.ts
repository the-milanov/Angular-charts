import { Component, OnInit } from "@angular/core";
import { DataCommunicationService } from './../../services/data-communication.service';
@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"],
})
export class ChartComponent implements OnInit {
  public horizontalLabel: string = "Date";
  public verticalLabel: string = "Value";
  public colors = { domain: ["red", "teal", "skyblue", "orange", "blue"] };
  constructor(public dataService: DataCommunicationService) {
  }
  ngOnInit() {}
}
