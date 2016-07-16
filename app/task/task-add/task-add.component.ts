import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {TaskModule} from '../../modules';

import {TaskService} from '../shared';

@Component({
    moduleId: module.id,
    selector: 'app-task-add',
    templateUrl: 'task-add.component.html',
})
export class TaskAddComponent implements OnInit {

    task:TaskModule; // use as query
    tasks:TaskModule[];

    taskRoute:TaskModule; // use given the id by route. 

    private sub: any;

    constructor(private router:Router,
                private route: ActivatedRoute,
                private taskService:TaskService) {
        console.log('TaskComponent.constructor');
        this.task = new TaskModule();
        this.tasks = [];        
    }

    ngOnInit():void {
        console.log('TaskComponent.ngOnInit');
        this.taskService.getRemoteTasks()
            .subscribe(response => {
              this.tasks = response;
            })
        console.log(this.tasks);
        this.sub = this.route.params
        
        .delay(3000).
        subscribe(params => {
            let id:number = +params['id']; // (+) converts string 'id' to a number
            console.log(id);
            if(id){
                this.taskRoute = this.taskService.getTask(id);
                console.log(this.taskRoute);
            }        
        });
    }

    addTask():void {
        console.log('TaskComponent.addTask');
        this.taskService.addTask(this.task);
        this.tasks = this.taskService.getTasks();
        this.task = new TaskModule();
        this.router.navigate(['/tasks']);
    }

    

}