import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	@Input() tasks: any[];
	@Input() login: string;

	@Output() onOpenDetails = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  	console.log(this.tasks);
  }
  private openDetails(taskObj) {
  	//console.log(taskObj);
  	this.onOpenDetails.emit(taskObj);  	
  }

}
