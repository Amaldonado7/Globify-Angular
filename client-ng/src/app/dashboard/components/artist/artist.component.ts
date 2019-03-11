import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Artist } from '../../entities/artist';
import { MusicService } from 'src/app/services/music.service';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'gl-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artists: Artist[];
  selectedArtist: Artist;
  @Input() toggle: boolean;
  @Output() getArtistAlbums: EventEmitter<any> = new EventEmitter();

  constructor(private musicService: MusicService, private appService: AppService) {
    this.musicService.getConnectedArtists().subscribe(data => { // llamo a los artistas más escuchados
      this.artists = data;
    });
    this.appService.updateArtists.subscribe(data => { // llamo a los artistas casteados
			this.artists = data;
		});
  }

  ngOnInit() {
  }

  artistClicked(artist) {
    this.getArtistAlbums.emit({
      id: artist.id
    });
    this.selectedArtist = artist;
  }


}
