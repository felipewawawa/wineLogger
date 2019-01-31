import { Component, OnInit, Input } from '@angular/core';
import { Wine } from '../../model/wine'

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

@Input() wineList: Wine[];
searchText: string;
  constructor() { }

  ngOnInit() {
  }

}


