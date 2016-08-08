import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
  <div class="col-sm-8 input-lg task-form">
    <h3>Create Task:</h3>
    <input placeholder="Description" class="input-lg form-control" #newDescription>
    <input placeholder="Priority" class="input-lg form-control" #newPriority>
    <button class="btn-primary btn-lg add-button"(click)="addTask(newDescription,newPriority)">Add</button>
  </div>
  `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriority: HTMLInputElement){
    this.onSubmitNewTask.emit([userDescription.value, userPriority.value]);
    userDescription.value = "";
    userPriority.value = "";
  }
}
