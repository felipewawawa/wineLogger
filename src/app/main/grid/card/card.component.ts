import { Component, OnInit, Input } from '@angular/core';
import { Wine } from '../../../model/wine';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() wine: Wine;
nameLabel: string = '';
ageLabel: string = '';
ratingLabel: string = '';
commentLabel: string = '';
  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.translateService.getTranslation('en').subscribe((res)=>{
	this.nameLabel = res[0]['CARD_NAME']
	this.ageLabel = res[0]['CARD_AGE']
	this.ratingLabel = res[0]['CARD_RATING']
	this.commentLabel = res[0]['CARD_COMMENT']
    });
  }

}
