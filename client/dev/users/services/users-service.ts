import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';
import { Repository } from '../models/repository';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
    
  private baseURL = 'https://api.github.com';
  private usersURL = '/users';  
  private repositoriesURL = '/users/login/repos'; 

  constructor(private http: Http) { }
  
  
  getUsers(): Observable<User[]> {
        return this.http.get(this.baseURL+this.usersURL)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getRepositories(login: string): Observable<Repository[]>{    
      console.log('login:'+login);
      return this.http.get(this.baseURL+this.repositoriesURL.replace(/login/gi,login))
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();     
    return body || { };
  }

  private handleError (error: Response | any) {    
    let errMsg: string;      
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
