import {Injectable} from '@angular/core';

import {TaskModule} from '../../modules';

@Injectable()
export class TaskService {

    tasks:TaskModule[];

    constructor() {
        this.tasks = [];
    }

    addTask(task:TaskModule):void {
        task.id = this.tasks.length+1;
        this.tasks.push(task);
    }

    getTasks():TaskModule[] {
        return this.tasks;
    }

    removeTask(task:TaskModule):void {
        let reduce = this.tasks.filter((t:TaskModule) => {
            return t.id != task.id
        });
        this.tasks = reduce.slice();
    }
}