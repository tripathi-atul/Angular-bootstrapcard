import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-tile',
  templateUrl: './card-tile.component.html',
  styleUrls: ['./card-tile.component.css']
})
export class CardTileComponent implements OnInit {

  @Input() cardtitle: string;
  @Input() iambutton: string;

  constructor() { }

  ngOnInit(): void {
  }

}
