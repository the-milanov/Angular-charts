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
    this.selectedCurrencies = currencies.slice(0,6);
  }
  requestData() {
  }
}
