import { Component } from '@angular/core';
import { DataCommunicationService } from '../../services/data-communication.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent{
  constructor(public dataService: DataCommunicationService) {
  }
}
