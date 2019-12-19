import { Component, OnInit } from "@angular/core";
import { DataCommunicationService } from 'src/app/services/data-communication.service';
@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"]
})
export class ChartComponent implements OnInit {
  horizontalLabel: string = "Date";
  verticalLabel: string = "Value";
  colors = { domain: ["red", "teal", "skyblue", "orange", "blue"] };

  constructor(private dataService: DataCommunicationService) {
  }
  ngOnInit() {}
}
