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
    this.cardList.push(
      new CardObject('first','first'));
      this.cardList.push(new CardObject('second','second'));
    

  }

}
