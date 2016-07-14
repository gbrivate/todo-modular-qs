import {Component, OnInit} from '@angular/core';

import {TaskModule} from '../modules';
import {TaskService} from './shared';
import {TaskListComponent} from './task-list';

@Component({
    moduleId: module.id,
    selector: 'app-task',
    styleUrls:  ['task.component.css'],
    templateUrl: 'task.component.html',
    directives: [TaskListComponent],
})
export class TaskComponent implements OnInit {

    task:TaskModule;
    tasks:TaskModule[];

    constructor(private taskService:TaskService) {
        this.task = new TaskModule();
        this.tasks = [];
    }

    ngOnInit():void {
        this.tasks = this.taskService.getTasks();

    }

    addTask():void {
        this.taskService.addTask(this.task);
        this.task = new TaskModule();
    }


}