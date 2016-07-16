import {RouterConfig} from '@angular/router';

import {TaskComponent} from './task.component';
import {TaskAddComponent} from './task-add';

export const taskRoutes:RouterConfig = [
    {path: 'tasks', component: TaskComponent},
    {path: 'task', component: TaskAddComponent},
    {path: 'task/:id', component: TaskAddComponent},
];

