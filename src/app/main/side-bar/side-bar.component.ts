import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
create: boolean = false;
avatar: string = "";
createLabel: string = ""
  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    this.translateService.getTranslation('en').subscribe((res)=>{
      console.log(res)
    this.avatar = res[0]['AVATAR'];
    this.createLabel = res[0]['SIDEBAR_REGISTER'];
    });
  }

	createBt(){
		this.create = !this.create;
	}
}
