import { Component, OnInit } from "@angular/core";
import { data } from "../../models/default-data";
@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"]
})
export class ChartComponent implements OnInit {
  // options
  horizontalLabel: string = "Date";
  verticalLabel: string = "Value";
  colors = { domain: ["red", "teal", "skyblue", "orange", "blue"] };
  data;
  constructor() {
    this.data = data;
  }
  ngOnInit() {}
}
