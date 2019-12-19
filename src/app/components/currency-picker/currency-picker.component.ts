import { Component, OnInit } from '@angular/core';
import { currencies, Currency } from "../../models/currencies";
import { DataCommunicationService } from './../../services/data-communication.service';

@Component({
  selector: 'app-currency-picker',
  templateUrl: './currency-picker.component.html',
  styleUrls: ['./currency-picker.component.scss'],
  providers: [DataCommunicationService]
})
export class CurrencyPickerComponent implements OnInit {
  public currencies: Array<Currency>;
  public dataService: DataCommunicationService;
  constructor(private _dataService: DataCommunicationService) { 
    this.currencies = currencies;
    this.dataService = _dataService;
  }

  ngOnInit() {
  }

}
