import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA }          from '@angular/core';
import { By }              from '@angular/platform-browser';

import { UserDetailComponent } from './user-detail.component';
import { Router } from '@angular/router';
import { User } from '../user';
describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('/users/{{user.login}}/repositories')
  };
  let expectedUser: User = {
    id:1,
    login:'dan',
    avatar_url:'http://dan/avatar_url',
    html_url:'http://dan/html_url',
    url:'http://dan',
    repos_url:'http://dan/repos'
  };
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailComponent ],
      providers: [{ provide: Router, userValue: mockRouter}],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;    
    component.user = expectedUser;
    fixture.detectChanges();
  });

  it('should tell if component was created', () => {
    expect(component).toBeTruthy();
  });
  
  it('should show the login of the user in template', () => {
    let de = fixture.debugElement.query(By.css('.login'));
    let el = de.nativeElement;
    expect(el.textContent).toContain('dan');   
  });  
});
