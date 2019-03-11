import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Artist } from '../../app/dashboard/entities/artist';
import { Album } from '../../app/dashboard/entities/album';
import { Track } from '../../app/dashboard/entities/track';
import { MusicProvider } from './musicProvider.interface';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService implements MusicProvider {

  base_url = 'https://api.spotify.com/v1';
  token: string;
  httpOptions: {};

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute){
    this.activatedRoute.queryParams.subscribe(params => {
      this.token = params['t'];
      this.httpOptions = {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'

        })
      }
    });
  }

  public getConnectedArtists(): Observable<Artist[]> {
    return this.http.get(`${this.base_url}/me/top/artists`, this.httpOptions)
    .pipe(
      // tap((data=>{
      //   console.log(data)
      // })
      // ),
      map((data: any) =>
        data.items.map((artist: any) => {
          return new Artist(artist.id, artist.name, artist.images[0].url)
        }
      ))
    )
  }

  public getAlbums(id: number): Observable<Album[]> {
    // console.log(id);
    return this.http.get(`${this.base_url}/artists/${id}/albums?market=ar`, this.httpOptions)
    .pipe(
      map((data: any) =>
        data.items.map((album: any) => {
          return new Album(album.id, album.name, album.images[0].url)
        }
      ))
    )
  }

  public getTracks(id: number): Observable<Track[]> {
		return this.http.get(`${this.base_url}/albums/${id}/tracks`, this.httpOptions)
			.pipe(
				map((data: any) =>
					data.items.map((track: any) => {
						return new Track(track.id, track.name, track.duration_ms, track.preview_url)
					}
					))
			)
  }

  public search(input: any): Observable<Artist[]> {
    return this.http.get(`${this.base_url}/search?q=${input}&type=artist`, this.httpOptions)
      .pipe(
        map((data: any) =>
          data.artists.items.map((artist: any) => {
            if (artist.images.length){
              return new Artist(artist.id, artist.name, artist.images[0].url)
						}
						else {
							return new Artist(artist.id, artist.name, '../../assets/no-image.png')
						}
          }
        ))
      )
  }

}
