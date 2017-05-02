import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
      <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
      <h3>{{currentFocus}}</h3>
      <hr>
      <task-list [childTaskList]="masterTaskList" (clickSender)="editTask($event)"></task-list>
      <hr>
      <edit-task [childSelectedTask]="selectedTask" (doneButtonClickedSender)="finishedEditing()"></edit-task>
      <new-task></new-task>
    </div>`
})

export class AppComponent{
  currentFocus: string = 'Angular Homework';
  currentTime = new Date;
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedTask = null;

  masterTaskList: Task[] = [
    new Task('Finish weekend hw.', 3),
    new Task('Do laundry', 2),
    new Task('Clean kitchen', 1)
  ];

  editTask(clickedTask){
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
}
