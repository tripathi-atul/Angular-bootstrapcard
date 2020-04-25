import { Component, OnInit } from '@angular/core';
import { CardObject } from '../card-object';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cardList: CardObject[] =[];
  

  constructor() { }

  ngOnInit(): void {
    this.cardList= [
      new CardObject('first','first'),
      new CardObject('second','second')
    ];

  }

}
