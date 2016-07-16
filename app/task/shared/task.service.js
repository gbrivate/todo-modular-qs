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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        this.tasks = [];
        this.index = 0;
    }
    TaskService.prototype.addTask = function (task) {
        if (this.tasks.length == 0) {
            this.index = 0;
        }
        this.index++;
        task.id = this.index;
        this.tasks.push(task);
    };
    TaskService.prototype.getTask = function (id) {
        console.log(this.tasks);
        return this.tasks.find(function (t) {
            return t.id == id;
        });
    };
    TaskService.prototype.removeAllTasks = function () {
        this.tasks = [];
    };
    TaskService.prototype.getTasks = function () {
        return this.tasks;
    };
    TaskService.prototype.removeTask = function (task) {
        var reduce = this.tasks.filter(function (t) {
            return t.id != task.id;
        });
        this.tasks = reduce.slice();
    };
    TaskService.prototype.getRemoteTasks = function () {
        var _this = this;
        return this.http.get('app/mock_data/tasks.json')
            .map(function (response) {
            var data = _this.extractData(response);
            _this.tasks = data.tasks;
            _this.index = _this.tasks.length;
            return _this.tasks;
        })
            .catch(this.handleError);
    };
    TaskService.prototype.extractData = function (res) {
        var response = res.text();
        if (response.indexOf('[{') != -1 || response.indexOf('callback({') != -1) {
            response = response.replace('callback({', '[{');
            response = response.replace('[{', '{');
            response = response.replace('}]', '}');
        }
        var body = JSON.parse(response);
        body = (body.tasks) ? body : (body.length) ? body[0] : body;
        return body;
    };
    TaskService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    TaskService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map