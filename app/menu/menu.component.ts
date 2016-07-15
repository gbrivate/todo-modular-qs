import {Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class MenuComponent implements OnInit {

    constructor() {
        console.log('MenuComponent.constructor');
    }

    ngOnInit() {
        console.log('MenuComponent.ngOnInit');
    }


}
