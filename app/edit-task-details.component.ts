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
    <input [(ngModel)]="task.category" class="input-lg form-control"/>
  </div>
  `
})
export class EditTaskDetailsComponent {
  public task: Task;
}
