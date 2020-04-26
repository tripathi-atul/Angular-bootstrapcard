import { Component, OnInit, Input } from '@angular/core';
import { CardObject } from '../card-object';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-card-tile',
  templateUrl: './card-tile.component.html',
  styleUrls: ['./card-tile.component.css']
})
export class CardTileComponent implements OnInit {

  @Input() post: CardObject;
  fullSummary: string;

  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit(): void {
    this.fullSummary = this.post.cardtitle;
    this.post.cardtitle = this.truncatePipe.transform(this.post.cardtitle,[50]);
  }

  showFullSummary() {
    this.post.cardtitle = this.fullSummary;
  }

}
