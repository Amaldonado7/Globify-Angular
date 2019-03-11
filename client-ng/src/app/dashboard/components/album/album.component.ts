import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Album } from '../../entities/album';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'gl-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit, OnChanges {
  albums: Album [] = [];
  selectedAlbum: Album;
  @Input() idSelected: number;


  constructor(private musicService: MusicService) {

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.idSelected) {
      this.musicService.getAlbums(changes.idSelected.currentValue).subscribe(data => {
        this.albums = data;
      });
    }
  }

  onSelect(album) {
    this.selectedAlbum = album;
  }

}
