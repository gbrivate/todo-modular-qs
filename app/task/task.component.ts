import {Component, OnInit} from '@angular/core';

import {TaskModule} from '../modules';

import {TaskService} from './shared';
import {TaskListComponent} from './task-list';

@Component({
    moduleId: module.id,
    selector: 'app-task',
    styleUrls: ['task.component.css'],
    templateUrl: 'task.component.html',
    directives: [TaskListComponent]
})
export class TaskComponent implements OnInit {

    task:TaskModule;
    tasks:TaskModule[];

    constructor(private taskService:TaskService) {
        console.log('TaskComponent.constructor');
        this.task = new TaskModule();
        this.tasks = [];
    }

    ngOnInit():void {
        console.log('TaskComponent.ngOnInit');
        this.tasks = this.taskService.getTasks();
    }

    addTask():void {
        console.log('TaskComponent.addTask');
        this.taskService.addTask(this.task);
        this.tasks = this.taskService.getTasks();
        this.task = new TaskModule();
    }

    deleteAllTask():void {
        console.log('TaskComponent.deleteAllTask');
        this.taskService.removeAllTasks();
        this.tasks = [];
        this.task = new TaskModule();
    }

    reset() {
        this.taskService.getRemoteTasks().subscribe(
            response =>  this.tasks = response,
            error => console.log('error - loading tasks')
        )
    }

    // have a look at https://angular.io/docs/ts/latest/cookbook/component-communication.html
    onChange(isChange:boolean):void {
        console.log('TaskComponent.onChange');
        if (isChange) {
            this.tasks = this.taskService.getTasks();
        }
    }


}