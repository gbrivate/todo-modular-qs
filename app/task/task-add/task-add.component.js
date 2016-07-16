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
var router_1 = require('@angular/router');
var modules_1 = require('../../modules');
var shared_1 = require('../shared');
var TaskAddComponent = (function () {
    function TaskAddComponent(router, route, taskService) {
        this.router = router;
        this.route = route;
        this.taskService = taskService;
        console.log('TaskComponent.constructor');
        this.task = new modules_1.TaskModule();
        this.tasks = [];
    }
    TaskAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('TaskComponent.ngOnInit');
        this.taskService.getRemoteTasks()
            .subscribe(function (response) {
            _this.tasks = response;
        });
        console.log(this.tasks);
        this.sub = this.route.params
            .delay(3000).
            subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            console.log(id);
            if (id) {
                _this.taskRoute = _this.taskService.getTask(id);
                console.log(_this.taskRoute);
            }
        });
    };
    TaskAddComponent.prototype.addTask = function () {
        console.log('TaskComponent.addTask');
        this.taskService.addTask(this.task);
        this.tasks = this.taskService.getTasks();
        this.task = new modules_1.TaskModule();
        this.router.navigate(['/tasks']);
    };
    TaskAddComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-task-add',
            templateUrl: 'task-add.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, shared_1.TaskService])
    ], TaskAddComponent);
    return TaskAddComponent;
}());
exports.TaskAddComponent = TaskAddComponent;
//# sourceMappingURL=task-add.component.js.map