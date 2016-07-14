import {provideRouter, RouterConfig} from '@angular/router';

import { AppComponent } from './app.component';
import { TaskComponent,TaskListComponent } from './task';

export const appRoutes:RouterConfig = [
    {
        path: '',
        redirectTo: '/tasks',
        terminal: true
    },
    {path: 'tasks', component: AppComponent},
];

export const appRouterProviders = [
    provideRouter(appRoutes)
];
