import {Component} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'edit-task-details',
  inputs: ['task'],
  template: `
  <div class="col-sm-8 control-form">
    <h4>Edit Task Description: </h4>
    <input [(ngModel)]="task.description" class="input-lg form-control"/><br>
    <h4>Edit Task Priority: </h4>
    <input [(ngModel)]="task.priority" class="input-lg form-control"/>
    <h4>Edit Task Category: </h4>
    <div class="radio">
      <label><input type="radio"  [checked]="task.category" name="category" value="Work" (click) = "task.category === 'Work'" #newCategory>Work</label>
    </div>
    <div class="radio">
      <label><input type="radio" [checked]="task.category" name="Category" id="school" value="School" (click) = "task.category === 'School'" #newCategory>School</label>
    </div>
    <div class="radio">
      <label><input type="radio" [checked]="task.category" name="Category" id="hobby" value="Hobby" (click) = "task.category === 'Hobby'" #newCategory>Hobby</label>
    </div>
    <div class="radio">
      <label><input type="radio" [checked]="task.category" name="Category" id="home" value="Home" (click) = "task.category === 'Home'" #newCategory>Home</label>
    </div>
    <button class="btn-primary btn-lg add-button"(click)="addTask(newDescription, newPriority, newCategory)">Update</button>
  </div>


  `
})
export class EditTaskDetailsComponent {
  public task: Task;
}
