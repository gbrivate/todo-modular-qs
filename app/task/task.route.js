"use strict";
var task_component_1 = require('./task.component');
var task_add_1 = require('./task-add');
exports.taskRoutes = [
    { path: 'tasks', component: task_component_1.TaskComponent },
    { path: 'task', component: task_add_1.TaskAddComponent },
    { path: 'task/:id', component: task_add_1.TaskAddComponent },
];
//# sourceMappingURL=task.route.js.map