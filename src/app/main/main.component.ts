import { Component, OnInit } from '@angular/core';
import { Wine } from '../model/wine';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
active: boolean = false;
wines: Wine[] = [];

  constructor() {
  }

  ngOnInit() {
  	this.active = window.innerWidth < window.innerHeight;
  }

  toogleBt(){
  	this.active = !this.active;
  }
}
