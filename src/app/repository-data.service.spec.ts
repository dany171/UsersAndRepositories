import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { Repository } from './repository';
import { RepositoryDataService } from './repository-data.service';

describe('RepositoryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ HttpModule ],
      providers: [RepositoryDataService, { provide: XHRBackend, useClass: MockBackend } ]
    });
  });

  it('should veritfy if service is instantiated ', inject([RepositoryDataService], (service: RepositoryDataService) => {
    expect(service).toBeTruthy();
  }));
  
  describe('#getRepositories()', () => {  
  it('should return an Observable<Array<Repository>>', inject(
    [RepositoryDataService, XHRBackend], 
    (repositoryDataService, mockBackend) => {

      const mockResponse = 
         [
          { 
            id: 1,
            name: 'repo1',
            description: 'my desc',
            html_url: 'http://dan.com/repo1/html',
            open_issues_count: 10,
            forks: 10 
          },
          { 
            id: 2,
            name: 'repo2',
            description: 'my desc 2',
            html_url: 'http://carl.com/repo2/html',
            open_issues_count: 5,
            forks: 3 
          }            
        ];

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });
            
      repositoryDataService.getRepositories('dan', 1, 2).subscribe((repositories) => {
        expect(repositories.length).toBe(2);
        expect(repositories[0].name).toEqual('repo1');
        expect(repositories[1].name).toEqual('repo2');            
      });    
    }));
  });
});
