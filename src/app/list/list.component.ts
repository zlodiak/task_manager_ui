import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { DateService } from '../services/date.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private sortColumn: string = 'status';
  private sortDirection: boolean = true;  

	@Input() tasks: any[];
	@Input() login: string;
  @Input() isTableMode: boolean;

	@Output() onOpenDetails = new EventEmitter<Object>();

  constructor(private dateService: DateService) { }

  ngOnInit() {
  	console.log(this.tasks);
  }

  private openDetails(taskObj) {
  	console.log(taskObj);
  	this.onOpenDetails.emit(taskObj);  	
  }

  private setSortColumn(column, direction) {
      this.sortColumn = column;
      this.sortDirection = direction;
  };

  private dateFormatter(unixDate): string {
    return this.dateService.fromUnixToHuman(unixDate);
  };

  private secondsFormatter(seconds): string {
    return this.dateService.secondsToHuman(seconds);
  };  

}
