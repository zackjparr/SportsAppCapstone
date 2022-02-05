import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  serviceUrl = "api/user/";


  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.serviceUrl = baseUrl + this.serviceUrl;

  }


  LoginUser(user: User){
    this.http.put(this.serviceUrl + "login", user).subscribe(
      (response: any) => {console.log(response);}
    );
  }

  UpdateUser(user: User){
    this.http.put(this.serviceUrl + `update/${user.userId}`, user).subscribe(
      (response: any) => {console.log("User Update Successful!");}
    );
  }

  CreateUser(user: User)
  {
    this.http.post(this.serviceUrl + "create", user).subscribe(
      (response:any) => { console.log("Created New User!");}
      );
  }

  GetCurrentUser(): Observable<any> {
    return this.http.get(this.serviceUrl + "current");
  }


  Logout() {
    this.http.get(this.serviceUrl + "logout").subscribe(
      (response: any) => {console.log(response);}
    );
  }
}
