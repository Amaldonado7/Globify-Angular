import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})

export class DashboardPage implements OnInit {
  idSelected: number;
  toggle: boolean = false;

  constructor() { }

  getArtistAlbums($event){
    this.idSelected = $event.id;
  }

  ngOnInit(){
  }

  toggleSection() {
		this.toggle = !this.toggle;
	}

}
