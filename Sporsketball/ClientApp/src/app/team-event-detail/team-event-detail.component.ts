import { Component, Input, OnInit } from '@angular/core';
import { CurrentEvents } from '../CurrentEvents';
import { SportsDBService } from '../sports-db.service';

@Component({
  selector: 'app-team-event-detail',
  templateUrl: './team-event-detail.component.html',
  styleUrls: ['./team-event-detail.component.css'],
  providers: [SportsDBService]
})
export class TeamEventDetailComponent implements OnInit {

  @Input() teamId;
  recentEvents: CurrentEvents;
  upcomingEvents: CurrentEvents;

  constructor(private sportsDBService: SportsDBService) { }

  ngOnInit() {
    this.sportsDBService.GetRecentEventsById(this.teamId).subscribe(
      (response:any) => {console.log(response);
      this.recentEvents = response;
      }
    );

    this.sportsDBService.GetUpcomingEventsById(this.teamId).subscribe(
      (response:any) => {console.log(response);
      this.upcomingEvents = response;
      }
    );
  }

}
