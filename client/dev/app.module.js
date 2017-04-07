"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var app_1 = require("./app");
//import { TodoCmp }   from "./todo/components/todo-cmp";
//import { todoRouting } from "./todo/components/todo-route";
//import { TodoService }   from "./todo/services/todo-service";
var users_1 = require("./users/components/users");
var repositories_1 = require("./users/components/repositories");
var users_route_1 = require("./users/components/users-route");
var users_service_1 = require("./users/services/users-service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            users_route_1.usersRouting
        ],
        declarations: [
            app_1.App,
            users_1.Users,
            repositories_1.RepositoriesComponent
        ],
        providers: [
            users_service_1.UsersService,
        ],
        bootstrap: [
            app_1.App
        ],
    })
], AppModule);
exports.AppModule = AppModule;
