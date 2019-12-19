import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from '../../services/data-communication.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [DataCommunicationService]
})
export class DatePickerComponent implements OnInit {
  public dataService: DataCommunicationService;
  constructor(private _dataService: DataCommunicationService) {
    this.dataService = _dataService;

  }

  ngOnInit() {}
}
