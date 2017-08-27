import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { TasksService } from '../services/tasks.service';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  	this.getTasks();
  }

  private getTasks(): void {
    this.tasksService
        .getTasks()
        .subscribe(data => {
                    console.log(JSON.parse(data._body));
                  }, 
                  err => {
                    console.log('err')         
                  });    
  };  

}
