import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TasksService{
  tasks: string[] = ['Market', 'Gym'];
  tasksChanged = new Subject<string[]>();

  constructor(private http: HttpClient) {}
  addTask(name: string){
    this.tasks.push(name);
    this.tasksChanged.next(this.tasks);
  }

  removeTask(name: string){
    this.tasks = this.tasks.filter(task => {
      return task !== name;
    });
    this.tasksChanged.next(this.tasks);
  }

  fetchFromApi(){
    
  }
}
