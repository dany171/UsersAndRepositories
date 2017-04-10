import {Repository} from './repository';

describe('Repository', () => {
  it('should create an instance', () => {
    expect(new Repository()).toBeTruthy();
  });

  it('should accept values in Repository constructor', () => {
    let repository = new Repository({
      id: 1,
      name: 'repo1',
      description: 'my repo',
      html_url: 'http://dan.com/repo1',
      open_issues_count: 2,
      forks: 3
    });
    expect(repository.id).toEqual(1);
    expect(repository.name).toEqual('repo1');
    expect(repository.description).toEqual('my repo');    
    expect(repository.html_url).toEqual('http://dan.com/repo1');
    expect(repository.open_issues_count).toEqual(2);
    expect(repository.forks).toEqual(3);
  });
});
