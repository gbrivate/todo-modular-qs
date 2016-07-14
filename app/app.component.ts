import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES}  from '@angular/router-deprecated';

import {TaskService, TaskComponent} from './task'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        TaskComponent],
    providers: [
        TaskService],

})
export class AppComponent implements OnInit {


    constructor() {

    }

    ngOnInit() {

    }


}
