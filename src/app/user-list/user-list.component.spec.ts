import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserListComponent } from './user-list.component';
import { UserDataService } from '../user-data.service';
import { User } from '../user';
import { By } from '@angular/platform-browser';
import { HttpModule, Http, BaseRequestOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('UserListComponent', () => {  
  let fixture;
  let comp;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      providers: [UserDataService, { provide: XHRBackend, useClass: MockBackend }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpModule]
    })
    .compileComponents();
     
    fixture = TestBed.createComponent(UserListComponent);
    comp = fixture.componentInstance;
    let user1 = new User();
    user1.login = 'dan';
    let user2= new User();
    user2.login = 'carl';
    let users = [user1,user2];
    comp.users = users;
    fixture.detectChanges();
  }));  

  it('should verify that component was created', () => {
    expect(comp).toBeTruthy();
  });
  
  it('should verify that "main" element was created in template', inject([UserDataService], (userDataService) => {
    expect(comp.users.length).toBe(2);
    let de = fixture.debugElement.query(By.css('.main'));
    let el = de.nativeElement;
    expect(el).toBeTruthy();   
  }));
  
});