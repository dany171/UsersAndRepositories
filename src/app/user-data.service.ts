import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UserDataService {

  users: User[] = [];
  USERS_URL = 'https://api.github.com/users';

  constructor(private http: Http) { }

  getUsers(since: number) {
    return this.http.get(
      `${this.USERS_URL}`,
      { params:  { since: since } }
    ).map(res => res.json());
  }

  getUser(login: string) {
    const user_url = this.USERS_URL + `/${ login }`;
    return this.http.get(user_url)
                    .map(res => res.json());
  }
}
