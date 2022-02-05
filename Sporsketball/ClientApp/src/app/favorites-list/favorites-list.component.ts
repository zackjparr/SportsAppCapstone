import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { SportsDBService } from '../sports-db.service';
import { FavoriteTeam, User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css'],
  providers: [UserService, FavoriteService]

})
export class FavoritesListComponent implements OnInit {

  currentUser: User;
  constructor(private userService: UserService, private favoriteService: FavoriteService) { }

  ngOnInit() {
    this.userService.GetCurrentUser().subscribe(
      (response: any) => {
        console.log(response);
        this.currentUser = response;
      })
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
