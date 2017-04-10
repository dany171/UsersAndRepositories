import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDataService } from './user-data.service';
import { RepositoryDataService } from './repository-data.service';
import { AlertModule } from 'ngx-bootstrap';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { RouterModule }   from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { RepositoryDetailComponent } from './repository-detail/repository-detail.component';
import { PaginationComponent } from './pagination/pagination.component';
import { UserListPaginationComponent } from './user-list-pagination/user-list-pagination.component';

@NgModule({
  declarations: [
    UserListComponent,
    AppComponent,
    UserDetailComponent,
    RepositoryListComponent,
    RepositoryDetailComponent,
    PaginationComponent,
    UserListPaginationComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [ UserDataService, RepositoryDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
