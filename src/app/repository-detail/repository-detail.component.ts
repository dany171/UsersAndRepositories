import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../repository';

@Component({
  selector: 'app-repository-detail',
  templateUrl: './repository-detail.component.html',
  styleUrls: ['./repository-detail.component.css']
})
export class RepositoryDetailComponent {

  @Input() repository: Repository;

  constructor() { }
}
