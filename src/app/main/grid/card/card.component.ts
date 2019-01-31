import { Component, OnInit, Input } from '@angular/core';
import { Wine } from '../../../model/wine';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() wine: Wine;
  constructor() { }

  ngOnInit() {
  }

}
