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
      this.cardList.push(new CardObject("Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have disdaimed that despicable wretch, Fyodor Pavlovitch, too much to have been upset by him in Father Zossima's cell, and so to have forgotten himself. Teh monks were not to blame, in any case, he reflceted, on the steps",'second'));
    

  }

}
