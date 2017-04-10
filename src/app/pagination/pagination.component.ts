import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalElements: number;
  @Input() currentPage: number;
  totalPages: number;
  @Input() range;
  @Output() onPageChange = new EventEmitter<number>();

  constructor() {    
  }

  ngOnInit() {
    this.currentPage = 1;
    this.totalPages =  Math.floor(this.totalElements/this.range);    
  }
  
  hasNext(){
    return this.currentPage < this.totalPages;
  }

  hasPrevious(){
    return this.currentPage > 1;
  }

  nextPage(){
    this.currentPage++;
    this.emitChange();
  }

  previousPage(){
    this.currentPage--;
    this.emitChange();
  }

  emitChange(){
    this.onPageChange.emit(this.currentPage);
  }
}