import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { currencies, Currency } from '../models/currencies';
import { HttpClient } from '@angular/common/http';
import { data } from '../models/default-data';

@Injectable()
export class DataCommunicationService {
  // Start date
  startMinDate: Date;
  startMaxDate: Date;
  // End date
  endMinDate: Date;
  endMaxDate: Date;
  // Date form controls
  public startDateControl: FormControl;
  public endDateControl: FormControl;
  // Query currencies
  public selectedCurrencies: Array<Currency>;

  public chartData: Array<any>;
  baseUrl = 'https://api.exchangeratesapi.io/';

  constructor(private _httpClient: HttpClient) {
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
    // Set selected currencies
    this.selectedCurrencies = currencies.slice(0, 6);
    this.chartData = data;
    // Initial request
    this.requestData();
  }
  public requestData() {
    const requestUrl = this.getRequestUrl();
    this._httpClient.get<any>(requestUrl).subscribe(response => {
      this.transformData(response.rates);
    });
  }
  transformData(rates) {
    const newChartData: Array<any> = [];
    const sortedDates = Object.keys(rates).sort();
    // tslint:disable-next-line: forin
    for (const key in rates[Object.keys(rates)[0]]) {
      const currencyData = {};
      currencyData['name'] = key;
      currencyData['series'] = [];
      for (const date of sortedDates) {
        let dataBlock = {};
        dataBlock["name"] = date;
        dataBlock["value"] = rates[date][key];
        currencyData['series'].push(dataBlock);
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
}
