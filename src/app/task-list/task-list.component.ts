import { Component } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks = [];
  task:Task = {
    name: "",
    value: 0,
    dateAdd: ""
  };
  add() {
    let task = Object.assign({},this.task)
    this.tasks.push(task);
  }
}

