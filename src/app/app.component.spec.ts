import { Component } from '@angular/core';
import { AppComponent } from './app.component';

import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async } from '@angular/core/testing';

import { User } from './user';

@Component({selector: 'app-user-list', template: ''})
class UserListComponent{}
@Component({selector: 'app-repository-list', template: ''})
class RepositoryListComponent{}

describe('AppComponent', () => {
  
  class MockRouter { public navigate() {}; }
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AppComponent, UserListComponent, RepositoryListComponent
      ]  ,
      providers: [
       
      ],
      imports: [
        RouterTestingModule.withRoutes(
        [
          { path: '', redirectTo: '/users', pathMatch: 'full' },
          { path: 'users',  component: UserListComponent },
          { path: 'users/:login/repositories', component: RepositoryListComponent }
        ])                
      ],     
           
      
    })
    .compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should display "Github App" in h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Github App');
  }));
});
