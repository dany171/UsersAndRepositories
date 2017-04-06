import {
  Component,
  Inject
} from "@angular/core";

import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user';
import { UsersService } from '../services/users-service';

@Component({
  selector: "users",
  templateUrl: "users/templates/user.html",
  styleUrls: ["users/styles/user.css"],
  providers: [UsersService]
})
export class Users implements OnInit{
  errorMessage: string;
  name: string = `yo, I"m your component :D`;
  users: User[];
  groups = [];
  mode = 'Observable';    
  constructor(private router: Router, private usersService: UsersService) { }
    
  ngOnInit() : void {
        this.getUsers();
  }
    
  getUsers(): void {
        this.usersService.getUsers().subscribe(
            users =>  
            {
                this.users = users;
                this.createGroups(users);
            },
            error => this.errorMessage = <any>error,
            );    
      
  }
 
  createGroups(users : User[]) : void {
    let j=0;
    for(let i=0; i<users.length;i+=4){
        this.groups[j] = users.slice(i,i+4);  
        j++;
    }   
  }
  
}