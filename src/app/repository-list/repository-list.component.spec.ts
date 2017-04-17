import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { RepositoryListComponent } from './repository-list.component';
import { RepositoryDataService } from '../repository-data.service';
import { UserDataService } from '../user-data.service';
import { Location, LocationStrategy } from '@angular/common';


describe('RepositoryListComponent', () => {
  let component: RepositoryListComponent;
  let fixture: ComponentFixture<RepositoryListComponent>;

  const mockRepositories = {
    entries : [
              { id: 1,
                name: 'repo1',
                description: 'repo1',
                html_url: 'http://repo1',
                open_issues_count: 1,
                forks: 2
              },
              { id: 2,
                name: 'repo2',
                description: 'repo2',
                html_url: 'http://repo2',
                open_issues_count: 3,
                forks: 4
              }
            ]
  };

  class RepositoriesServiceStub {
    getRepositories(login: string, page: number, range: number) {
      return Observable.create(observer => {
        observer.next(mockRepositories);
        observer.complete();
    });
    }
  }

  const repositoriesServiceStub = new RepositoriesServiceStub();

   const mockUsers = {
    entries : [
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

  const userServiceStub = new UserServiceStub();

  const mockRouter = {
    navigate: jasmine.createSpy('users')
  };

  const observer = Observable.create(obs => {
        obs.next({});
        obs.complete();
    });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers : [
        { provide: RepositoryDataService, useValue: repositoriesServiceStub },
        { provide: UserDataService, userValue: userServiceStub},
        { provide: ActivatedRoute, useValue: { 'params': observer} },
        { provide: Router, userValue: mockRouter},
        Location,
        LocationStrategy
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // TODO: fix and complete this unit tests file
});
