"use strict";
var router_1 = require('@angular/router');
var task_1 = require('./task');
var routes = [
    {
        path: '',
        redirectTo: '/tasks',
        terminal: true
    }
].concat(task_1.taskRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes),
];
//# sourceMappingURL=app.routes.js.map