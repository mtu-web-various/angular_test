import { Component, OnInit } from '@angular/core';
import { TasksService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskName = '';
  constructor(private tasksService: TasksService) { }

  onCreateTask(){
    console.log('The task name: ' + this.taskName);
  }
  ngOnInit(): void {
  }

}
