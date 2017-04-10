import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { UserListComponent } from './user-list.component';
import { UserDataService } from '../user-data.service';
import { User } from '../user';


describe('UserListComponent', () => {  
  
  const mockUsers = { 
    entries:[
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
            ]
  };
  
  class UserServiceStub {
    getUsers() {
      return Observable.create(observer => {
        observer.next(mockUsers);      
        observer.complete();
    });
    }
  }
  
  let userServiceStub = new UserServiceStub();
  let fixture;
  let comp;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      providers: [{ provide: UserDataService, useValue: userServiceStub }]
    })
    .compileComponents();
     
    fixture = TestBed.createComponent(UserListComponent);
    comp = fixture.componentInstance;
    
    userServiceStub = TestBed.get(UserDataService);    
  }));  

  it('should create', () => {
    expect(comp).toBeTruthy();
  });
  
  describe('#UserListComponent()', () => {     

    /*it('should load 2 users from service', inject([UserDataService], (userDataService) => {
      userDataService.getUsers().subscribe((users) => {
          expect(users.length).toBe(2);
          expect(users[0].login).toEqual('dan');
          expect(users[1].login).toEqual('carl');            
        });    
    }));*/

  });
});