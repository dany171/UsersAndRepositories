import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../repository';

@Component({
  selector: 'app-repository-detail',
  templateUrl: './repository-detail.component.html',
  styleUrls: ['./repository-detail.component.css']
})
export class RepositoryDetailComponent implements OnInit {

  @Input() repository: Repository;

  constructor() { }

  ngOnInit() {}

}
