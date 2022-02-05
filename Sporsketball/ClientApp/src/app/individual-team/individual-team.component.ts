import { Component, OnInit } from '@angular/core';
import { SportsDBService } from '../sports-db.service';
import { TeamData } from '../SportsDB';
import { ActivatedRoute } from '@angular/router';
import { FavoriteTeam, User } from '../user';
import { FavoriteService } from '../favorite.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-individual-team',
  templateUrl: './individual-team.component.html',
  styleUrls: ['./individual-team.component.css'],
  providers: [SportsDBService, FavoriteService, UserService]
})
export class IndividualTeamComponent implements OnInit {

  individualTeam: TeamData;
  teamId: number;
  currentUser: User;
  isFavorite: boolean;

  constructor(private teamService: SportsDBService, private route: ActivatedRoute, private favoriteService: FavoriteService, private userService: UserService) {
    this.userService.GetCurrentUser().subscribe(
      (response: any) => {
        console.log(response);
        this.currentUser = response;
      for(let i = 0; i < this.currentUser.favoriteTeams.length; i++){
        if(this.currentUser.favoriteTeams[i].teamId == this.teamId)
        { this.isFavorite = true;
          console.log(this.teamId);}
      }
      });

    // path: team-detail/:teamId
    this.route.params.subscribe(
      (response: any) => {
        this.teamId = response['teamId'];
        console.log(this.teamId);
      }
    );

    this.teamService.GetTeamById(this.teamId).subscribe(
      (response: any) => {
        console.log(response);
        this.individualTeam = response;
      });

  }

  ngOnInit() {
  }


  AddFavorite(id: number, thumb: string, name:string) {
    let favorite: FavoriteTeam = { faveId: 0, teamId: id, thumbnail: thumb, teamName: name  };
    this.favoriteService.AddFavoriteTeam(this.currentUser, favorite);
    this.currentUser.favoriteTeams.push(favorite);
  }

  DeleteTeam(favoriteId: number) {
    this.favoriteService.DeleteFavoriteTeam(this.currentUser.userId, favoriteId);
    let favoriteTeam = this.currentUser.favoriteTeams.filter( (favorite: FavoriteTeam) => favorite.faveId == favoriteId);
    let index = this.currentUser.favoriteTeams.indexOf(favoriteTeam[0]);
    console.log(favoriteTeam);
    console.log(index);
    this.currentUser.favoriteTeams.splice(index, 1);
  }

}
