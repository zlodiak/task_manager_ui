import { Injectable } from '@angular/core';

import {AUTH_DATA} from '../mock-auth';


@Injectable()
export class AuthService {

  constructor() { }

	getAuthData() {
	  return Promise.resolve(AUTH_DATA);
	}	  

}
