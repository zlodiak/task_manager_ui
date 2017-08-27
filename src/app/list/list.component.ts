import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	@Input() tasks: any[];
	@Input() login: string;

  constructor() { }

  ngOnInit() {
  	console.log(this.tasks);
  }
  private openDetails(taskObj) {
  	console.log(taskObj);
  }

}
