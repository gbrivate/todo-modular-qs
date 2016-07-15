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
                let data = this.extractData(response);
                this.tasks = data.tasks;
                this.index = this.tasks.length;
                return this.tasks;
            })
            .catch(this.handleError);

    }

    private extractData(res:Response) {
        let response:string = res.text();
        if(response.indexOf('[{')!=-1 || response.indexOf('callback({')!=-1){
            response = response.replace('callback({', '[{');
            response = response.replace('[{','{');
            response = response.replace('}]', '}');
        }
        let body = JSON.parse(response);
        body = (body.tasks)?body:(body.length)?body[0]:body;
        return body;
    }

    private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}