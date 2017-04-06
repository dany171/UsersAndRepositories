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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var users_service_1 = require("../services/users-service");
var Users = (function () {
    function Users(router, usersService) {
        this.router = router;
        this.usersService = usersService;
        this.name = "yo, I\"m your component :D";
        this.groups = [];
        this.mode = 'Observable';
    }
    Users.prototype.ngOnInit = function () {
        this.getUsers();
    };
    Users.prototype.getUsers = function () {
        var _this = this;
        this.usersService.getUsers().subscribe(function (users) {
            _this.users = users;
            _this.createGroups(users);
        }, function (error) { return _this.errorMessage = error; });
    };
    Users.prototype.createGroups = function (users) {
        var j = 0;
        for (var i = 0; i < users.length; i += 4) {
            this.groups[j] = users.slice(i, i + 4);
            j++;
        }
    };
    return Users;
}());
Users = __decorate([
    core_1.Component({
        selector: "users",
        templateUrl: "users/templates/user.html",
        styleUrls: ["users/styles/user.css"],
        providers: [users_service_1.UsersService]
    }),
    __metadata("design:paramtypes", [router_1.Router, users_service_1.UsersService])
], Users);
exports.Users = Users;
