import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import {TaskService, TaskComponent} from './task'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [
        HTTP_PROVIDERS,
        TaskService],
    directives: [TaskComponent]
})
export class AppComponent implements OnInit {


    constructor() {

    }

    ngOnInit() {

    }


}
