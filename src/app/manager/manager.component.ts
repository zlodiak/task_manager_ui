import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';

import { TasksService } from '../services/tasks.service';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  @Input() login: string;
	@Input() isTableMode: boolean;

	private isDetailsMode = false;
	private tasks: any[] = [];
  private taskObj: Object = {};

  constructor(private tasksService: TasksService) { };

  ngOnInit() {
    this.getTasks();
    /*let this_ = this;
    setInterval(function() {
      this_.getTasks();
    }, 3000);*/

  	
  }

  private getTasks(): void {
    console.log('get tasks');
    this.tasksService
        .getTasks()
        .subscribe(data => {     
        						this.tasks = JSON.parse(data._body);
                    //console.log(typeof this.tasks, this.tasks);                    
                  }, 
                  err => {
                    console.log('err')         
                  });    
  };  

  private fillDetails(taskObj): void {
    this.isDetailsMode = true;   
    this.taskObj = taskObj;
    console.log(this.taskObj);
  };

  private setDetailsMode(mode): void {
    this.isDetailsMode = mode;
  };

}
