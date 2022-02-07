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
  buttonText: string;

  constructor(private teamService: SportsDBService, private route: ActivatedRoute, private favoriteService: FavoriteService, private userService: UserService) {
    this.userService.GetCurrentUser().subscribe(
      (response: any) => {
        console.log(response);
        this.currentUser = response;
      for(let i = 0; i < this.currentUser.favoriteTeams.length; i++){
        if(this.currentUser.favoriteTeams[i].teamId == this.teamId)
        { this.isFavorite = true;
          console.log(this.teamId);
        }
      }
      if(this.isFavorite){
        this.buttonText = "Add to Favorites";
      }
      else{
        this.buttonText = "Remove from Favorites";
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

    this.isFavorite = true;
    this.buttonText = "Remove from Favorites";
   
  }

  DeleteTeam(favoriteId: number) {
    this.userService.GetCurrentUser().subscribe(
      (response: any) => {
        console.log(response);
        this.currentUser = response; 
    let favoriteTeam = this.currentUser.favoriteTeams.filter( (favorite: FavoriteTeam) => favorite.teamId == favoriteId);
    console.log(favoriteTeam);
    let faveId = favoriteTeam[0].faveId;
    console.log(faveId);
    this.favoriteService.DeleteFavoriteTeam(this.currentUser.userId, faveId);
    //console.log(favoriteTeam);
    //console.log(index);

    this.isFavorite = false;
    this.buttonText = "Add to Favorites"; }
    );
  }

}
