import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportsDBService {

  serviceUrl = "api/sportsdb/";
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { 
    this.serviceUrl = baseUrl + this.serviceUrl;
  }
  GetEvents(): Observable<any> {
    return this.http.get(this.serviceUrl + "recentevents");
  }

  SearchTerm(teamName:string): Observable<any> {
    return this.http.get(this.serviceUrl + `name/${teamName}`);
  }

  GetTeamById(id:number): Observable<any> {
    console.log(id);
    return this.http.get(this.serviceUrl + id);
  }

  GetRecentEventsById(teamId: number): Observable<any> {
    return this.http.get(this.serviceUrl + `recentevents/${teamId}`);
  }

  GetUpcomingEventsById(teamId: number): Observable<any> {
    return this.http.get(this.serviceUrl + `upcomingevents/${teamId}`);
  }

  GetPlayerRosterById(teamId: number): Observable<any>{
    return this.http.get(this.serviceUrl + `roster/${teamId}`);
  }
}


