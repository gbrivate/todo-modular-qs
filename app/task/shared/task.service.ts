import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import {TaskModule} from '../../modules';

@Injectable()
export class TaskService {

    tasks:TaskModule[];
    index:number;

    constructor(private http:Http) {
        this.tasks = [];
        this.index = 0;
    }

    addTask(task:TaskModule):void {
        if (this.tasks.length == 0) {
            this.index = 0;
        }
        this.index++;
        task.id = this.index;
        this.tasks.push(task);
    }

    removeAllTasks():void {
        this.tasks = [];
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

    getRemoteTasks():Observable<TaskModule[]> {
        return this.http.get('app/mock_data/tasks.json')
            .map(response => {
                this.tasks = this.extractData(response);
                this.index = this.tasks.length;
                return this.tasks;
            })
            .catch(this.handleError);

    }

    private extractData(res:Response) {
        let body = res.json();
        return body.tasks || {};
    }

    private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}