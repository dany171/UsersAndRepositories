import {
	Routes,
	RouterModule
} from "@angular/router";

import {
	Users
} from "../components/users";

const usersRoutes:Routes = [
	{
		path: "",
		component: Users,
		pathMatch: "full"
	}
]

export const usersRouting = RouterModule.forRoot(usersRoutes);
