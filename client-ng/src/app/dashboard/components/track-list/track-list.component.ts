import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Track } from './../../entities/track';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'gl-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit, OnChanges {
  tracks: Track[] = [];
  @Input() albumId: number;

  constructor(private musicService: MusicService) { }

  ngOnInit() {
  }

  ngOnChanges(chages: SimpleChanges) {
		this.musicService.getTracks(this.albumId).subscribe(data => {
			this.tracks = data;
		});
  }


}
