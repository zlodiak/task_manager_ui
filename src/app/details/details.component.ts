import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

	@Input() taskObj: Object;
	@Output() onChangeDetailsMode = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  private back() {
		this.onChangeDetailsMode.emit(false); 
  };

}
