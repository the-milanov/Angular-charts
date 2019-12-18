import { Component, OnInit } from '@angular/core';
import { currencies, Currency } from "../../models/currencies";
@Component({
  selector: 'app-currency-picker',
  templateUrl: './currency-picker.component.html',
  styleUrls: ['./currency-picker.component.scss']
})
export class CurrencyPickerComponent implements OnInit {
  currencies: Array<Currency>;
  selectedCurrencies: Array<Currency>;
  constructor() { 
    this.currencies = currencies;
    this.selectedCurrencies = currencies.slice(0,6);
  }

  ngOnInit() {
  }

}
