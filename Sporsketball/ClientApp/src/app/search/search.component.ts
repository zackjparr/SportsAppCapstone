import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { SportsDBService } from '../sports-db.service';
import { TeamData } from '../SportsDB';
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
      });
  }

  AddFavorite(id: number, thumb: string, name:string) {
    let favorite: FavoriteTeam = { faveId: 0, teamId: id, thumbnail: thumb, teamName: name  };
    this.favoriteService.AddFavoriteTeam(this.currentUser, favorite);
  }

}
