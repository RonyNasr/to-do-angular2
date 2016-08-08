import {Component} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'edit-task-details',
  inputs: ['task'],
  template: `
    <div class="col-sm-8 input-lg task-form">
      <h4>Edit Task Description: </h4>
      <input [(ngModel)]="task.description" class="input-lg form-control"/><br>
      <h4>Edit Task Priority: </h4>
      <input [(ngModel)]="task.priority" class="input-lg form-control"/>
    </div>
  `
})
export class EditTaskDetailsComponent {
  public task: Task;
}
