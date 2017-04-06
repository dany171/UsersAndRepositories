"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var users_1 = require("../components/users");
var usersRoutes = [
    {
        path: "",
        component: users_1.Users,
        pathMatch: "full"
    }
];
exports.usersRouting = router_1.RouterModule.forRoot(usersRoutes);
