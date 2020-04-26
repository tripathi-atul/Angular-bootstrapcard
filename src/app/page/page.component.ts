import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  @Input() numberOfPages: number;
  pages: any[];
  @Output() pageNumberClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.pages = new Array(this.numberOfPages);
  }

  updatePageClicked(pageNumber) {
    this.pageNumberClick.emit(pageNumber);

  }

}
