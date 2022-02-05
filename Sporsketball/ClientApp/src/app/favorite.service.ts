import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoriteTeam, User } from './user';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  serviceUrl = "api/favorite/";
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.serviceUrl = baseUrl + this.serviceUrl;
  }
  GetBoard(): Observable<any> {
    return this.http.get(this.serviceUrl + "board");
  }


  AddFavoriteTeam(user: User, favorite: FavoriteTeam): void {
    console.log(favorite);
    this.http.post(this.serviceUrl + `create/${user.userId}`, favorite).subscribe(
      (response: any) => { console.log("Added team to Favorites!"); }
    );
  }

  DeleteFavoriteTeam(userId: number, favoriteId: number): void {
    this.http.delete(this.serviceUrl + `delete/${userId}/${favoriteId}`).subscribe(
      (response: any) => { console.log("Team Removed"); }
    );
  }
}
