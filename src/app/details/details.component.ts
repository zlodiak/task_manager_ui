import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { DateService } from '../services/date.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

	@Input() taskObj: Object;
	@Output() onChangeDetailsMode = new EventEmitter<boolean>();

  constructor(private dateService: DateService) { }

  ngOnInit() {
  }

  private back() {
		this.onChangeDetailsMode.emit(false); 
  };

  private dateFormatter(unixDate): string {
    return this.dateService.fromUnixToHuman(unixDate);
  };

  private secondsFormatter(seconds): string {
    return this.dateService.secondsToHuman(seconds);
  };  

}
