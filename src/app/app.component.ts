import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	public isAuthorized: boolean = false;
	
	ngOnInit() {

	}

	constructor() { };

	private setAuthorizeState(state) {
		//console.log(state);
		this.isAuthorized = state;
	};

}
