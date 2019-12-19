import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from 'src/app/services/data-communication.service';

@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.scss']
})
export class DataPickerComponent implements OnInit {

  constructor(private dataService: DataCommunicationService) { }

  ngOnInit() {
  }
  requestData(){
    this.dataService.requestData();
  }

}
