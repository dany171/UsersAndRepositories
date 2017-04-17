export class Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  open_issues_count: number;
  forks: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
