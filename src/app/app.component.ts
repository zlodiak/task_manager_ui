import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	public isAuthorized: boolean = false;
	public login: string = '';
	
	ngOnInit() {

	}

	constructor() { };

	private setAuthorizeState(event) {
		console.log(event);
		this.isAuthorized = event.authorize;
		this.login = event.login;
	};

}
