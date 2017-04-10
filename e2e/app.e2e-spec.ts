import { UsersAndRepositoriesPage } from './app.po';

describe('users-and-repositories App', () => {
  let page: UsersAndRepositoriesPage;

  beforeEach(() => {
    page = new UsersAndRepositoriesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
