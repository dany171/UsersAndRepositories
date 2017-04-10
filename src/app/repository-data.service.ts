import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Repository } from './repository';

@Injectable()
export class RepositoryDataService {

  private repositories: Repository[] = [];
  private REPOSITORIES_URL = 'https://api.github.com/users/:login/repos';
  
  constructor(private http: Http) { }

  getRepositories(login: string, page: number, range: number) {    
    return this.http.get(`${this.REPOSITORIES_URL.replace(/:login/gi,login)}`,{ params:  { page: page , per_page: range }})
                  .map(res => res.json());    
  }
}
