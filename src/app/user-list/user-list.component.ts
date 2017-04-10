import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserDataService } from '../user-data.service';
import { UserDetailComponent } from '../user-detail/user-detail.component';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: []
})
export class UserListComponent implements OnInit {  
  since: number;
  users: User[] = [];  
  groups = [];
  errorMessage: string;  

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {    
    this.getUsers(this.since);  
  }

  onUserListPageChange() {
    this.getUsers(this.since);
  }

  getUsers(since: number){
    this.userDataService.getUsers(since)
      .subscribe(users => { 
      this.users = users; 
      this.since=this.users[this.users.length-1].id;      
      this.createGroups(this.users);       
    });    
  }
  
  createGroups(users : User[]) : void {
    let j=0;    
    for(let i=0; i<users.length;i+=4){    
      this.groups[j] = users.slice(i,i+4);  
      j++;
    }   
  }  
}
