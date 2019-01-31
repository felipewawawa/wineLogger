import { Component, OnInit } from '@angular/core';
import { Wine } from '../model/wine';
import { WineService } from '../service/wine.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
active: boolean = false;
wines: Wine[] = [];

  constructor(private wineService: WineService,
              private translateService: TranslateService) {
    this.wineService.getAllWines().subscribe((res)=>{
      this.wines = this.wineService.fromJson(res);
    });
  }

  ngOnInit() {
  	this.active = window.innerWidth < window.innerHeight;
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

  toogleBt(){
  	this.active = !this.active;
  }
}
