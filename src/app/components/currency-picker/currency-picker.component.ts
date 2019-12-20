import { Component, OnInit } from '@angular/core';
import { currencies, Currency } from "../../models/currencies";
import { DataCommunicationService } from './../../services/data-communication.service';

@Component({
  selector: 'app-currency-picker',
  templateUrl: './currency-picker.component.html',
  styleUrls: ['./currency-picker.component.scss'],
})
export class CurrencyPickerComponent implements OnInit {
  public currencies: Array<Currency>;
  constructor(public dataService: DataCommunicationService) { 
    this.currencies = currencies;
  }

  ngOnInit() {
  }

}
