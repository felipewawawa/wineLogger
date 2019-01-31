import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
@Output() create = new EventEmitter<boolean>();
avatar: string = "";
createLabel: string = ""
  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    this.translateService.getTranslation('en').subscribe((res)=>{
    this.avatar = res[0]['AVATAR'];
    this.createLabel = res[0]['SIDEBAR_REGISTER'];
    });
  }

	createBt(){
    this.create.emit();
	}
}
