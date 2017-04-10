export class User {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
  html_url: string;
  repos_url: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}