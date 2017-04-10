import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { User } from './user';

@Component({selector: 'app-user-list', template: ''})
class UserListComponent{}

describe('AppComponent', () => {
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AppComponent, UserListComponent
      ]      
    })
    .compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should display "Users" in h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Users');
  }));
});
