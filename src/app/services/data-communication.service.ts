import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { currencies, Currency } from "../models/currencies";

@Injectable({
  providedIn: "root"
})
export class DataCommunicationService {
  // Start date
  startMinDate: Date;
  startMaxDate: Date;
  // End date
  endMinDate: Date;
  endMaxDate: Date;
  // Date form controls
  startDateControl: FormControl;
  endDateControl: FormControl;
  // Query currencies
  selectedCurrencies: Array<Currency>;
  baseUrl = "https://api.exchangeratesapi.io/";

  constructor() {
    // Initial dates
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 1);
    const endDate = new Date();
    // Date restrictions
    this.startMinDate = new Date(2000, 0, 1);
    this.startMaxDate = new Date();
    this.startMaxDate.setDate(startDate.getDate() - 1);
    this.endMinDate = new Date(2000, 0, 2);
    this.endMaxDate = new Date();
    // Date form controls setup
    this.startDateControl = new FormControl(startDate);
    this.endDateControl = new FormControl(endDate);
    // Set selected currencies
    this.selectedCurrencies = currencies.slice(0, 6);
  }
  requestData() {
    console.log(this.getRequestUrl());
  }
  getRequestUrl(): string {
    let startDate = (<string>this.startDateControl.value.toISOString()).substr(
      0,
      10
    );
    let endDate = (<string>this.endDateControl.value.toISOString()).substr(
      0,
      10
    );
    let base = this.selectedCurrencies[0].value;
    let symbols: string = "";
    this.selectedCurrencies
      .slice(1, this.selectedCurrencies.length)
      .forEach((v, i) => {
        if (this.selectedCurrencies.length - 2 > i) {
          symbols += `${v.value},`;
        } else {
          symbols += `${v.value}`;
        }
      });
    return `${this.baseUrl}history?start_at=${startDate}&end_at=${endDate}&symbols=${symbols}&base=${base}`;
  }
}
