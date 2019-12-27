import { Component } from '@angular/core';
import { DataCommunicationService } from './../../services/data-communication.service';

@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.scss'],
})
export class DataPickerComponent {
  constructor(public dataService: DataCommunicationService) { }
}
