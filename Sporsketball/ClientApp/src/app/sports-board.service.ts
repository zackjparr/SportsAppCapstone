import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SportsBoard } from './SportsBoard';

@Injectable({
  providedIn: 'root'
})
export class SportsBoardService {

  serviceUrl = "api/sportstalk/";
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.serviceUrl = baseUrl + this.serviceUrl;
  }
  GetBoard(): Observable<any> {
    return this.http.get(this.serviceUrl + "board");
  }

  NewPost(newPost: SportsBoard): void {
    console.log(newPost);

    this.http.post(this.serviceUrl + "create", newPost).subscribe(
      (response: any) => { console.log("Created New Post!"); }
    );
  }

  DeletePost(deletePost: number): void {
    this.http.delete(this.serviceUrl + `delete/${deletePost}`).subscribe(
      (response: any) => { console.log("Post Removed"); }
    );
  }
}

