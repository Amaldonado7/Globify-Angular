import { Injectable } from '@angular/core';
import { Artist } from '../../app/dashboard/entities/artist';
import { Album } from '../../app/dashboard/entities/album';
import { Track } from '../../app/dashboard/entities/track';
import { MusicProvider } from './musicProvider.interface';
import { SpotifyService } from './spotify.service';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MusicService {
  provider: SpotifyService;

  constructor(spotify: SpotifyService) {
    this.provider = spotify;
  }

  public getAlbums(id): Observable<Album[]> {
    return this.provider.getAlbums(id);
  }

  public getTracks(id): Observable<Track[]> {
		return this.provider.getTracks(id);
	}

  public getConnectedArtists(): Observable<Artist[]> {
    return this.provider.getConnectedArtists();
  }

  public search(input){
		return this.provider.search(input);
  }

}
