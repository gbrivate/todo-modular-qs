import {Component, Input, EventEmitter, Output} from '@angular/core';

import {TaskModule} from '../../modules';

import {TaskService} from '../shared/task.service';

@Component({
    moduleId: module.id,
    selector: 'app-task-list',
    templateUrl: 'task-list.component.html',
})
export class TaskListComponent {

    @Input() tasks:TaskModule[];

    @Output() isChange:EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private taskService:TaskService) {
        console.log('TaskListComponent.constructor');
    }

    ngOnInit():void {
        console.log('TaskListComponent.ngOnInit');
        this.tasks = this.taskService.getTasks();
    }

    removeTask(task:TaskModule):void {
        console.log('TaskListComponent.removeTask');
        this.taskService.removeTask(task);
        this.isChange.emit(true);
    }

}