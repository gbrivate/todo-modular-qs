import {provideRouter} from '@angular/router';

import {taskRoutes} from './task';

const routes = [
    {
        path: '',
        redirectTo: '/tasks',
        terminal: true
    },
    ...taskRoutes,
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
];
