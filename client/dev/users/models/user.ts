import {Injectable} from '@angular/core';

@Injectable()
export class User{
  
  constructor(
    login: string,
    id: number,
    avatar_url: string,
    url: string,
    html_url: string,
    repos_url: string,
    ) { }   
    
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  html_url: string;
  repos_url: string;  
}
