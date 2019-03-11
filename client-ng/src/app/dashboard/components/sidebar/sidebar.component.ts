import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';
import { AlbumComponent } from '../album/album.component';

@Component({
  selector: 'gl-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @HostBinding('class.active')
  sidebarActive: boolean = true;
  album: AlbumComponent;

  @Output() toggle = new EventEmitter();

	constructor() { }

	ngOnInit() {
	}

	toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
    this.toggle.emit();
  }

}
