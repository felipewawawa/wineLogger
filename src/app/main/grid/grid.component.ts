import { Component, OnInit, Input } from '@angular/core';
import { Wine } from '../../model/wine'
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

@Input() wineList: Wine[];
searchTitle: string;
  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    this.translateService.getTranslation('en').subscribe((res)=>{
    	this.searchTitle = res[0]['SEARCH_TITLE'];
    });
  }

}


