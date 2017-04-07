import {Injectable} from '@angular/core';

@Injectable()
export class Repository{
 
  constructor(
    id : number,
    name: string,
    full_name: string,
    html_url: string,
    description : string,
    url: string,
  ) { }   
    
  id : number;
  name: string;
  full_name: string;
  html_url: string;
  description : string;
  url: string;
}