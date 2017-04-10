import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';

import { RepositoryDetailComponent } from './repository-detail.component';
import { Repository } from '../repository';

describe('RepositoryDetailComponent', () => {
  let component: RepositoryDetailComponent;
  let fixture: ComponentFixture<RepositoryDetailComponent>;
  let expectedRepository: Repository = {
    id:1,
    name:'repo1',
    description:'desc',
    html_url:'my_html_url',
    open_issues_count:1,forks:1
  };
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryDetailComponent);
    component = fixture.componentInstance;
    component.repository = expectedRepository;
    fixture.detectChanges();    
  });

  it('should verify that component was created', () => {
    expect(component).toBeTruthy();
  });
  
  it('should show the name of the repository in template', () => {
    let de = fixture.debugElement.query(By.css('.name'));
    let el = de.nativeElement;
    expect(el.textContent).toContain('repo1');   
  });
});