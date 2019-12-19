import { Component, OnInit } from '@angular/core';
import { currencies, Currency } from "../../models/currencies";
import { DataCommunicationService } from 'src/app/services/data-communication.service';
@Component({
  selector: 'app-currency-picker',
  templateUrl: './currency-picker.component.html',
  styleUrls: ['./currency-picker.component.scss']
})
export class CurrencyPickerComponent implements OnInit {
  currencies: Array<Currency>;
  constructor(private dataService: DataCommunicationService) { 
    this.currencies = currencies;
  }

  ngOnInit() {
  }

}
