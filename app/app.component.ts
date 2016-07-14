import {Component, OnInit} from '@angular/core';

import {TaskService, TaskComponent} from './task'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [TaskService],
    directives: [TaskComponent]
})
export class AppComponent implements OnInit {


    constructor() {

    }

    ngOnInit() {

    }


}
