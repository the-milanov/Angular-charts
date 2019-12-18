import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.scss"]
})
export class DatePickerComponent implements OnInit {
  // Start date
  startMinDate = new Date(2000, 0, 1);
  startMaxDate = new Date();
  startDate: Date = new Date();
  startDateControl = new FormControl(this.startDate);
  // End date
  endMinDate = new Date(2000, 0, 2);
  endMaxDate = new Date();
  endDateControl = new FormControl(new Date());

  constructor() {
    this.startDate.setMonth(this.startDate.getMonth() - 1);
    this.startMaxDate.setDate(this.startDate.getDate() - 1);
    console.log(this.startDateControl.value);
  }

  ngOnInit() {}
}
