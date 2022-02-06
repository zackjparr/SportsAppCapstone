import { Component, Input, OnInit } from '@angular/core';
import { PlayerRoster } from '../PlayerRoster';
import { SportsDBService } from '../sports-db.service';

@Component({
  selector: 'app-team-roster',
  templateUrl: './team-roster.component.html',
  styleUrls: ['./team-roster.component.css'],
  providers: [SportsDBService]
})
export class TeamRosterComponent implements OnInit {

  @Input() teamId;
  teamRoster: PlayerRoster;

  constructor(private sportsDBService: SportsDBService) { }

  ngOnInit() {
    this.sportsDBService.GetPlayerRosterById(this.teamId).subscribe(
      (response:any) => {console.log(response);
      this.teamRoster = response;
      }
    );
    }
    
}
