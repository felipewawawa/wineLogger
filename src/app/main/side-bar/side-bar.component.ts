import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
create: boolean = false;
avatar: string = "";
createLabel: string = ""
  constructor() {
  }

  ngOnInit() {
  }

	createBt(){
		this.create = !this.create;
	}
}
