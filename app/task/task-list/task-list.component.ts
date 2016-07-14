import {Component} from '@angular/core';

import {TaskModule} from '../../modules';

import {TaskService} from '../shared/task.service';

@Component({
    moduleId: module.id,
    selector: 'app-task-list',
    templateUrl: 'task-list.component.html',
})
export class TaskListComponent {

    tasks:TaskModule[];

    constructor(private taskService:TaskService) {
        this.tasks = [];
    }

    ngOnInit():void {
        this.tasks = this.taskService.getTasks();

    }

}