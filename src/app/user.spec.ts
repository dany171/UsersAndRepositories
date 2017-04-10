import {User} from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });
    
  it('should accept values in User constructor', () => {
    let user = new User({
      id: 1,
      login: 'dan',
      avatar_url: 'http://dan.com/avatar.jpg',
      url: 'http://dan.com',
      html_url: 'http://dan.com/html',
      repos_url: 'http://dan.com/repos'    
    });
    expect(user.id).toEqual(1);
    expect(user.login).toEqual('dan');
    expect(user.avatar_url).toEqual('http://dan.com/avatar.jpg');
    expect(user.url).toEqual('http://dan.com');
    expect(user.html_url).toEqual('http://dan.com/html');
    expect(user.repos_url).toEqual('http://dan.com/repos');
  });
});
