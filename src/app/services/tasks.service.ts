import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TasksService {

  constructor(private http: Http) { };

  getTasks(): Observable<any> {
  	let result = this.http.get('../assets/tasks.json');
  	return result;
  }  

}
