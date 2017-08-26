import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Auth } from '../auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

	private authData: Auth[];
	private login: string = '';
	private password: string = '';	

	@Output() onAuthorize = new EventEmitter<Object>();
	
	ngOnInit() {
		this.getAuthData();
	}

	constructor(private authService: AuthService) { };

  private getAuthData() {
    let self = this;
    this.authService.getAuthData().then( function(authData) {
    	console.log(authData);
      return self.authData = authData;
    });
	};

	private authorize(login: string, password:string): void {
		//console.log(login, password, this.authData);
		let this_ = this;

		this.authData.forEach(function(item) {
		  if(item.login.trim() == login.trim() && item.password.trim() == password.trim()) {
		  	//console.log('!!');
		  	this_.onAuthorize.emit({
		  		authorize: true,
		  		login: login
		  	});
		  }
		});		
	};

}
