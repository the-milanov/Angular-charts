import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from './../../services/data-communication.service';

@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.scss'],
  providers: [DataCommunicationService]
})
export class DataPickerComponent implements OnInit {
  public dataService: DataCommunicationService;

  constructor(private _dataService: DataCommunicationService) { 
    this.dataService = _dataService;
  }

  ngOnInit() {
  }
  public requestData(){
    this.dataService.requestData();
  }

}
