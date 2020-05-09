import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import { map } from 'rxjs/operators';
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

    this.http.get<any>('https://www.googleapis.com/books/v1/volumes/zYw3sYFtz9kC')
    .pipe(
      map(resData => {
        return resData.volumeInfo.title;
      })
    )
    .subscribe(data => {
      let dataList = this.tasks;
      dataList.push(data);
      this.tasksChanged.next(dataList);
    });
  }
}
