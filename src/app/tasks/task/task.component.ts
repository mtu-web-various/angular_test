import { Component, OnInit } from '@angular/core';
import { TasksService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private tasksService: TasksService) { }

  onCreateTask(){
    console.log("task is created")
  }
  ngOnInit(): void {
  }

}
