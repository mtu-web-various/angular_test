import { Component, OnInit, OnDestroy } from '@angular/core';
import { TasksService } from '../task/task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit, OnDestroy {
  taskList: string[];
  private taskListSubs: Subscription;

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.taskListSubs = this.tasksService.tasksChanged.subscribe(tasks => {
      this.taskList = tasks;
    });
  }

  ngOnDestroy(): void{
    this.taskListSubs.unsubscribe();
  }

}
