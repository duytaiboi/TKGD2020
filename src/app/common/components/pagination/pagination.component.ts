import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number;
  @Input() numberOfItems: number;

  itemsLength: number[];

  constructor() { }

  ngOnInit() {
    this.itemsLength = Array.from(Array(this.numberOfItems), (x, i) => ++i);
  }

  onClickNext() {
    if (this.currentPage < this.itemsLength.length) {
      this.currentPage++;
    }
  }

  onClickPrevious() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  onClickPage(index: number) {
    this.currentPage = index;
  }
}
