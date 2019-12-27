import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.scss'],
})
export class DataPickerComponent {
  constructor(public dataService: DataService) { }
}
