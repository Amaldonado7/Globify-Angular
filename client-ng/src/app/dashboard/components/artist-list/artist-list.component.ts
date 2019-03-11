import { Component, OnInit, Input } from '@angular/core';
import { Artist } from './../../entities/artist';

@Component({
  selector: 'gl-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  @Input() artist: Artist;
  @Input() selectedArtist: Artist;

  constructor() { }

  ngOnInit() {
  }

}
