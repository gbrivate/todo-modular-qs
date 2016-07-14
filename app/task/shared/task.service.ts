import {Injectable} from '@angular/core';

import {TaskModule} from '../../modules';

@Injectable()
export class TaskService {

    tasks:TaskModule[];


    constructor() {
        this.tasks = [];
    }

    addTask(task:TaskModule):void {
        this.tasks.push(task);
    }

    getTasks():TaskModule[] {
        return this.tasks;
    }


}