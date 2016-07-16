"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var modules_1 = require('../modules');
var shared_1 = require('./shared');
var task_list_1 = require('./task-list');
var TaskComponent = (function () {
    function TaskComponent(taskService) {
        this.taskService = taskService;
        console.log('TaskComponent.constructor');
        this.task = new modules_1.TaskModule();
        this.tasks = [];
    }
    TaskComponent.prototype.ngOnInit = function () {
        console.log('TaskComponent.ngOnInit');
        this.tasks = this.taskService.getTasks();
    };
    TaskComponent.prototype.addTask = function () {
        console.log('TaskComponent.addTask');
        this.taskService.addTask(this.task);
        this.tasks = this.taskService.getTasks();
        this.task = new modules_1.TaskModule();
    };
    TaskComponent.prototype.deleteAllTask = function () {
        console.log('TaskComponent.deleteAllTask');
        this.taskService.removeAllTasks();
        this.tasks = [];
        this.task = new modules_1.TaskModule();
    };
    TaskComponent.prototype.reset = function () {
        var _this = this;
        this.taskService.getRemoteTasks().subscribe(function (response) { return _this.tasks = response; }, function (error) { return console.log('error - loading tasks'); });
    };
    // have a look at https://angular.io/docs/ts/latest/cookbook/component-communication.html
    TaskComponent.prototype.onChange = function (isChange) {
        console.log('TaskComponent.onChange');
        if (isChange) {
            this.tasks = this.taskService.getTasks();
        }
    };
    TaskComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-task',
            styleUrls: ['task.component.css'],
            templateUrl: 'task.component.html',
            directives: [task_list_1.TaskListComponent]
        }), 
        __metadata('design:paramtypes', [shared_1.TaskService])
    ], TaskComponent);
    return TaskComponent;
}());
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=task.component.js.map