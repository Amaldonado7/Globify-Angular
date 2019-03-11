import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { User } from '../../app/dashboard/entities/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
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

  public getUser(): Observable<User> {
		return this.http.get(`${this.base_url}/me`, this.httpOptions)
			.pipe(
				map((user: any) => new User(user.id, user.display_name, user.images[0].url)
				))
	}
}
