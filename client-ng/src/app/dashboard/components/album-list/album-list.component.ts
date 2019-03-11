import { Component, OnInit, Input } from '@angular/core';
import { Album } from './../../entities/album';

@Component({
  selector: 'gl-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  @Input() album: Album;
  @Input() selectedAlbum: Album;

  constructor() { }

  ngOnInit() {
  }

  clicked(album) {
  	if (this.selectedAlbum === album) this.selectedAlbum = null;
		else (this.selectedAlbum = album);
	}

}
