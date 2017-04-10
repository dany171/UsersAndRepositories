import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-list-pagination',
  templateUrl: './user-list-pagination.component.html',
  styleUrls: ['./user-list-pagination.component.css']
})
export class UserListPaginationComponent {

  @Output() onUserListPageChange = new EventEmitter();
  constructor() { }

  nextPage(){    
    this.onUserListPageChange.emit();
  }
}
