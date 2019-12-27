import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { currencies } from "../data/currencies";
import { Currency } from "../models/Currency";
import { defaultChartData } from "../data/default-chart-data";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ApiService } from "./api.service";

@Injectable({ providedIn: "root" })
export class DataService {
  startMinDate: Date;
  startMaxDate: Date;
  endMinDate: Date;
  endMaxDate: Date;
  public startDateControl: FormControl;
  public endDateControl: FormControl;

  public selectedCurrencies: Array<Currency>;

  public chartData: Array<any>;

  baseUrl = "https://api.exchangeratesapi.io/";

  constructor(
    private _snackBar: MatSnackBar,
    private _apiService: ApiService
  ) {
    this.initializeDate();
    this.selectedCurrencies = currencies.slice(0, 6);
    this.chartData = defaultChartData;
    this.requestData();
  }
  public requestData() {
    const requestUrl = this.getRequestUrl();
    this._apiService
      .getData(requestUrl)
      .subscribe(this.handleSuccessfulRequest.bind(this), this.handleFailedRequest.bind(this));
  }
  handleSuccessfulRequest(response) {
    this.transformResponse(response.rates);
  }
  handleFailedRequest(error) {
    this._snackBar.open(
      `Failed request, error message: ${error.error.error}`,
      "OK"
    );
  }
  transformResponse(rates) {
    const newChartData: Array<any> = [];
    const sortedDates = Object.keys(rates).sort();
    // tslint:disable-next-line: forin
    for (const key in rates[Object.keys(rates)[0]]) {
      const currencyData = {};
      currencyData["name"] = key;
      currencyData["series"] = [];
      for (const date of sortedDates) {
        const dataBlock = {};
        dataBlock["name"] = date;
        dataBlock["value"] = rates[date][key];
        currencyData["series"].push(dataBlock);
      }
      newChartData.push(currencyData);
    }
    this.chartData = newChartData;
  }
  getRequestUrl(): string {
    const startDate = (this.startDateControl.value.toISOString() as string).substr(
      0,
      10
    );
    const endDate = (this.endDateControl.value.toISOString() as string).substr(
      0,
      10
    );
    const base = this.selectedCurrencies[0].value;
    let symbols = '';
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
  initializeDate() {
    // Initial dates
    const startDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 3);
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
  }
}
