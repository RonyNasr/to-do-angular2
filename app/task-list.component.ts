import { Component, EventEmitter } from 'angular2/core';
import { TaskComponent } from './task.component';
import { Task } from './task.model';
import { EditTaskDetailsComponent } from './edit-task-details.component';
import { NewTaskComponent } from './new-task.component';
import {DonePipe} from './done.pipe';
import {PriorityPipe} from './priority.pipe';

@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  outputs: ['onTaskSelect'],
  pipes: [DonePipe, PriorityPipe],
  directives: [TaskComponent, EditTaskDetailsComponent, NewTaskComponent],
  template: `
  <select (change)="onChange($event.target.value)" id="filter">
    <option value="all">Show All</option>
    <option value="done">Show Done</option>
    <option value="notDone" selected="selected">Show Not Done</option>
  </select>
  <select (change)="onPriorityChange($event.target.value)" id="filter">
    <option value="All" selected="selected">Show All</option>
    <option value="High">Show High</option>
    <option value="Medium">Show Medium</option>
    <option value="Low">Show Low</option>
  </select>
  <task-display *ngFor="#currentTask of taskList | done:filterDone | priority:filterPriority"
    (click)="taskClicked(currentTask)"
    [class.selected]="currentTask === selectedTask"
    [task]="currentTask">
  </task-display>
  <new-task (onSubmitNewTask)="createTask($event)"></new-task>
  <edit-task-details *ngIf="selectedTask" [task]="selectedTask">
  </edit-task-details>
  `
})
export class TaskListComponent {
  public taskList: Task[];
  public onTaskSelect: EventEmitter<Task>;
  public selectedTask: Task;
  public filterDone: string = "notDone";
  public filterPriority: string = "All";
  constructor() {
    this.onTaskSelect = new EventEmitter();
  }
  taskClicked(clickedTask: Task): void {
    this.selectedTask = clickedTask;
    this.onTaskSelect.emit(clickedTask);
  }
  createTask([description, priority, category]: string[]): void {
    this.taskList.push(
      new Task(description, this.taskList.length, priority, category)
    );
  }
  onChange(doneOption) {
    this.filterDone = doneOption;
    console.log(this.filterPriority);

  }
  onPriorityChange(priorityOption) {
    this.filterPriority = priorityOption;
    console.log(this.filterDone);
  }

}
