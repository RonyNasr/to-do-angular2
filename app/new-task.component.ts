import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
    <div class="col-sm-8 control-form">
      <h3>Create Task:</h3>
      <input placeholder="Description" class="input-lg form-control" #newDescription>
      <input placeholder="Priority" class="input-lg form-control" #newPriority>
      <input placeholder="Category" class="input-lg form-control" #newCategory>
      <button class="btn-primary btn-lg add-button"(click)="addTask(newDescription, newPriority, newCategory)">Add</button>
    </div>
  `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriority: HTMLInputElement, userCategory: HTMLInputElement){
    this.onSubmitNewTask.emit([userDescription.value, userPriority.value, userCategory.value]);
    userDescription.value = "";
    userPriority.value = "";
    userCategory.value = "";
  }
}
