import { Artist } from '../../app/dashboard/entities/artist';
import { Album } from '../../app/dashboard/entities/album';
import { Track } from '../../app/dashboard/entities/track';
import { Observable } from 'rxjs';

export interface MusicProvider {
  getAlbums(id: number): Observable<Album[]>;
  getTracks(id: number): Observable<Track[]>;
  getConnectedArtists(): Observable<Artist[]>;
  search(input: number): Observable<Artist[]>;
}
