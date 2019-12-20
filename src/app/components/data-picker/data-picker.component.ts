import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from './../../services/data-communication.service';

@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.scss'],
})
export class DataPickerComponent implements OnInit {
  constructor(public dataService: DataCommunicationService) { 
  }

  ngOnInit() {
  }
  public requestData(){
    this.dataService.requestData();
  }

}
