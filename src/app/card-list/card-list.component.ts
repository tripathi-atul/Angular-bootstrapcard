import { Component, OnInit } from '@angular/core';
import { CardObject } from '../card-object';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cardList: CardObject[][];
  currentPage: number;
  

  constructor() { }

  ngOnInit(): void {
    this.currentPage = 0;

    this.cardList = [
      [
        {
          cardtitle:'first',iambutton:'first'
        },
        {
          cardtitle:'second',iambutton:'second'
        },
        {
          cardtitle:'third',iambutton:'third'
        },
        {
          cardtitle:'fourth',iambutton:'fourth'
        },

      ],
      [
        {
          cardtitle:'fifth',iambutton:'fifth'
        },
        {
          cardtitle:'sixth',iambutton:'sixth'
        },
        {
          cardtitle:'seventh',iambutton:'seventh'
        },

      ],
      [
        {
          cardtitle:'eighth',iambutton:'eighth'
        },
        {
          cardtitle:'ninth',iambutton:'ninth'
        },
      ]
    ];

  }

  updateCurrentPage(pageNumber) {
    this.currentPage = pageNumber;

  }

}
