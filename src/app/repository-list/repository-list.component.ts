import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { User } from '../user';
import { Repository } from '../repository';
import { RepositoryDataService } from '../repository-data.service';
import { PaginationComponent } from '../pagination/pagination.component';
import { RepositoryDetailComponent } from '../repository-detail/repository-detail.component';
import { UserDataService } from '../user-data.service';


@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})
export class RepositoryListComponent implements OnInit {

  login;
  RANGE = 10;
  user: User;
  repositories: Repository[] = [];
  groups = [];
  currentPage = 1;
  constructor(
    private repositoryDataService: RepositoryDataService,
    private userDataService: UserDataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
    
  ngOnInit(): void {    
    this.route.params.subscribe(params => {
       this.login = params['login']; 
       this.getUser(this.login)
       .subscribe(user => {
         this.user = user;
         this.getRepositories(this.login, this.currentPage, this.RANGE);  
         
       });      
    });
  }

  onPageChange(page: number) {
    this.getRepositories(this.login, page, this.RANGE);
  }

  getRepositories(login: string, page: number, range: number){
    this.route.params
    .map(params=>params['login'])
    .switchMap(login => this.repositoryDataService.getRepositories(login, page, range))
    .subscribe(repositories => {
        this.repositories = repositories;
        this.createGroups(repositories);
        }
    );    
  }

  getUser(login: string){
    return this.userDataService.getUser(login);
  }

  createGroups(repositories : Repository[]) : void {
    let j=0;
    for(let i=0; i<repositories.length;i+=4){
      this.groups[j] = repositories.slice(i,i+4);  
      j++;
    }   
  }   
}
