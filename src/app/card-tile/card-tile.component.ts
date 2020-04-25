import { Component, OnInit, Input } from '@angular/core';
import { CardObject } from '../card-object';

@Component({
  selector: 'app-card-tile',
  templateUrl: './card-tile.component.html',
  styleUrls: ['./card-tile.component.css']
})
export class CardTileComponent implements OnInit {

  @Input() post: CardObject;
  constructor() { }

  ngOnInit(): void {
  }

}
