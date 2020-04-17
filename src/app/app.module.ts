import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasklistComponent } from './tasks/tasklist/tasklist.component';
import { TaskComponent } from './tasks/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
