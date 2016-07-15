import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {TaskModule} from '../../modules';

import {TaskService} from '../shared';

@Component({
    moduleId: module.id,
    selector: 'app-task-add',
    templateUrl: 'task-add.component.html',
})
export class TaskAddComponent implements OnInit {

    task:TaskModule;
    tasks:TaskModule[];

    constructor(private router:Router,
                private taskService:TaskService) {
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
        this.router.navigate(['/tasks']);
    }

}