import { Component, OnInit } from "@angular/core";
import { DataCommunicationService } from './../../services/data-communication.service';
@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"],
  providers: [DataCommunicationService]
})
export class ChartComponent implements OnInit {
  public horizontalLabel: string = "Date";
  public verticalLabel: string = "Value";
  public colors = { domain: ["red", "teal", "skyblue", "orange", "blue"] };
  public dataService: DataCommunicationService;
  constructor(private _dataService: DataCommunicationService) {
  this.dataService = _dataService;
  }
  ngOnInit() {}
}
