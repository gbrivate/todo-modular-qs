import {Injectable} from '@angular/core';

import {TaskModule} from '../../modules';

@Injectable()
export class TaskService {

    tasks:TaskModule[];
    index:number;

    constructor() {
        this.tasks = [];
        this.index = 1;
    }

    addTask(task:TaskModule):void {
        task.id = this.index++;
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