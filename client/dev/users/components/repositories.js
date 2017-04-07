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
var common_1 = require("@angular/common");
var users_service_1 = require("../services/users-service");
require("rxjs/add/operator/switchMap");
var RepositoriesComponent = (function () {
    function RepositoriesComponent(usersService, route, location) {
        this.usersService = usersService;
        this.route = route;
        this.location = location;
        this.groups = [];
    }
    RepositoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .map(function (params) { return params['login']; })
            .switchMap(function (login) { return _this.usersService.getRepositories(login); })
            .subscribe(function (repositories) {
            _this.repositories = repositories;
            _this.createGroups(repositories);
        });
    };
    RepositoriesComponent.prototype.createGroups = function (repositories) {
        var j = 0;
        for (var i = 0; i < repositories.length; i += 4) {
            this.groups[j] = repositories.slice(i, i + 4);
            j++;
        }
    };
    return RepositoriesComponent;
}());
RepositoriesComponent = __decorate([
    core_1.Component({
        selector: 'repositories',
        templateUrl: 'users/templates/repositories.html',
        styleUrls: ["users/styles/repositories.css"]
    }),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        router_1.ActivatedRoute,
        common_1.Location])
], RepositoriesComponent);
exports.RepositoriesComponent = RepositoriesComponent;
