import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalElements: number;
  @Input() currentPage: number;
  @Input() range: number;

  @Output() onPageChange: EventEmitter<number> = new EventEmitter<number>();

  totalPages: number;

  constructor() {
  }

  ngOnInit() {
    this.currentPage = 1;
    const totalPagesRealNumber: number = this.totalElements / this.range;
    this.totalPages =  Math.floor(totalPagesRealNumber);
  }

  hasNext() {
    return this.currentPage < this.totalPages;
  }

  hasPrevious() {
    return this.currentPage > 1;
  }

  nextPage() {
    this.currentPage++;
    this.emitChange();
  }

  previousPage() {
    this.currentPage--;
    this.emitChange();
  }

  emitChange() {
    this.onPageChange.emit(this.currentPage);
  }
}
