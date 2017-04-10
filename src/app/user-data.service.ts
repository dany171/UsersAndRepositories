import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { User } from './user';

@Injectable()
export class UserDataService {

  users : User[] = [];
  private USERS_URL = 'https://api.github.com/users';  
  private USER_URL = 'https://api.github.com/users/:login';  

  constructor(private http: Http) { }
  
  getUsers(since: number) {
    return this.http.get(`${this.USERS_URL}`,{ params:  { since: since }})
                    .map(res => res.json());
  }

  getUser(login: string) {    
    return this.http.get(`${this.USER_URL.replace(/:login/gi,login)}`)
                    .map(res => res.json());
  }
}
