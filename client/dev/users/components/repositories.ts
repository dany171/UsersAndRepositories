import { Component } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { UsersService } from '../services/users-service';
import { User } from '../models//user';
import { Repository } from '../models/repository';

import 'rxjs/add/operator/switchMap';

@Component({  
  selector: 'repositories',
  templateUrl: 'users/templates/repositories.html',
  styleUrls: ["users/styles/repositories.css"]
})
export class RepositoriesComponent {
    
    user: User;
    repositories : Repository[];
    groups = [];
 
    constructor(
      private usersService: UsersService,
      private route: ActivatedRoute,
      private location: Location
    ) {}
    
    ngOnInit(): void {
        this.route.params
        .map(params=>params['login'])
        .switchMap(login => this.usersService.getRepositories(login))
        .subscribe(repositories => {
            this.repositories = repositories;
            this.createGroups(repositories);
            }
        );
    }
    
    createGroups(repositories : Repository[]) : void {
      let j=0;
      for(let i=0; i<repositories.length;i+=4){
        this.groups[j] = repositories.slice(i,i+4);  
        j++;
      }   
    }   
}