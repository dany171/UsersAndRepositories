import { Routes, RouterModule } from "@angular/router";

import { Users } from "../components/users";
import { RepositoriesComponent } from "../components/repositories";

const usersRoutes:Routes = [
	{
		path: "",
		component: Users,
		pathMatch: "full"
	},
    {
        path: 'user/:login/repositories',
        component: RepositoriesComponent
    }
]

export const usersRouting = RouterModule.forRoot(usersRoutes);