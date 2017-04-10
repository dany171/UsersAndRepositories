import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent }   from './user-list/user-list.component';
import { RepositoryListComponent }  from './repository-list/repository-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users',  component: UserListComponent },
  { path: 'users/:login/repositories', component: RepositoryListComponent }  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}