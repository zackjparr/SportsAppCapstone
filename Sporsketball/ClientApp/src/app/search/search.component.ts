import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { SportsDBService } from '../sports-db.service';
import { Team, TeamData } from '../SportsDB';
import { FavoriteTeam, User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SportsDBService, UserService, FavoriteService]
})
export class SearchComponent implements OnInit {

  teamName: string;
  searchResult: TeamData;
  currentUser: User;


  constructor(private search: SportsDBService, private userService: UserService, private favoriteService: FavoriteService) { }

  ngOnInit() {
    this.userService.GetCurrentUser().subscribe(
      (response: any) => {
        console.log(response);
        this.currentUser = response;
      })
  }

  Submit() {
    this.search.SearchTerm(this.teamName).subscribe(
      (response: any) => {
        console.log(response);
        this.searchResult = response;
        for(let i = 0; i < this.searchResult.teams.length; i++){
          for(let j=0; j < this.currentUser.favoriteTeams.length; j++){
            if(this.searchResult.teams[i].idTeam === this.currentUser.favoriteTeams[j].teamId){
              this.searchResult.teams[i].isFavorite = true;
              this.searchResult.teams[i].buttonText = "Remove from Favorites";
              break;
            }
          }
          this.searchResult.teams[i].buttonText = "Add to Favorites";
        }
        
      });
  }


  AddFavorite(id: number, thumb: string, name:string) {
    let favorite: FavoriteTeam = { faveId: 0, teamId: id, thumbnail: thumb, teamName: name  };
    this.favoriteService.AddFavoriteTeam(this.currentUser, favorite);
    let team = this.searchResult.teams.filter( (t: Team) => t.idTeam === id);
    let index = this.searchResult.teams.indexOf(team[0]);

    this.searchResult.teams[index].isFavorite= true;
    this.searchResult.teams[index].buttonText = "Remove from Favorites";
   
  }

  DeleteTeam(teamId: number) {
    this.userService.GetCurrentUser().subscribe(
      (response: any) => {
        console.log(response);
        this.currentUser = response; 
        let favoriteTeam = this.currentUser.favoriteTeams.filter( (favorite: FavoriteTeam) => favorite.teamId == teamId);
    

    console.log(favoriteTeam);
    let faveId = favoriteTeam[0].faveId;
    console.log(faveId);
    this.favoriteService.DeleteFavoriteTeam(this.currentUser.userId, faveId);
    let team = this.searchResult.teams.filter( (t: Team) => t.idTeam === teamId);
    let index = this.searchResult.teams.indexOf(team[0]);

    this.searchResult.teams[index].isFavorite = false;
    this.searchResult.teams[index].buttonText = "Add to Favorites"; }
    );
  }

}
