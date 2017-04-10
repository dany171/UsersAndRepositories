import { TestBed, inject, async } from '@angular/core/testing';
import { HttpModule, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { User } from './user';
import { UserDataService } from './user-data.service';

describe('UserDataService', () => {  
  let since = 1;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ HttpModule ],
      providers: [ UserDataService , { provide: XHRBackend, useClass: MockBackend } ]
    });
  });

  it('should veritfy if service is instantiated ', inject([UserDataService], (userDataService) => {
    expect(userDataService).toBeTruthy();
  }));
  
  describe('#getUsers()', () => {  
    it('should return an Observable<Array<User>>', inject(
      [UserDataService, XHRBackend], 
      (userDataService, mockBackend) => {
      
        const mockResponse = 
           [
            { id: 1,
              login: 'dan',
              avatar_url: 'http://dan.com/avatar.jpg',
              url: 'http://dan.com',
              html_url: 'http://dan.com/html',
              repos_url: 'http://dan.com/repos' },
            { id: 2,
              login: 'carl',
              avatar_url: 'http://carl.com/avatar.jpg',
              url: 'http://carl.com',
              html_url: 'http://carl.com/html',
              repos_url: 'http://carl.com/repos' 
            }            
          ];
        
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
        userDataService.getUsers(since).subscribe((users) => {
          expect(users.length).toBe(2);
          expect(users[0].login).toEqual('dan');
          expect(users[1].login).toEqual('carl');            
        });    
    }));
  });
});