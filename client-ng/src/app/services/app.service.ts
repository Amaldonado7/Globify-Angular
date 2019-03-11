import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { MusicService } from './music.service';
import { Artist } from '../../app/dashboard/entities/artist';

@Injectable({
	providedIn: 'root'
})

export class AppService {

	private artists: Subject<Artist[]> = new Subject<Artist[]>();
	updateArtists = this.artists.asObservable(); //busco castear a los artistas

	constructor(private musicService: MusicService) {
	}

	inputSearch(input: any){
		this.musicService.search(input).subscribe((artists: any) => {
			this.artists.next(artists); //devuelve un objeto e itero lo que espero
		});
	}

}
