import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS}  from '@angular/http';
import {ROUTER_DIRECTIVES}  from '@angular/router';

import  {MenuComponent} from './menu';

import {TaskService} from './task';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        MenuComponent],
    providers: [
        HTTP_PROVIDERS,
        TaskService
    ]

})
export class AppComponent implements OnInit {


    constructor() {
        console.log('AppComponent.constructor');
    }

    ngOnInit():void {
        console.log('AppComponent.ngOnInit');
    }


}
