import { Component, OnInit } from '@angular/core';

import { SportsBoardService } from '../sports-board.service';
import { SportsBoard, User } from '../SportsBoard';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sports-board',
  templateUrl: './sports-board.component.html',
  styleUrls: ['./sports-board.component.css'],
  providers: [SportsBoardService, UserService]
})
export class SportsBoardComponent implements OnInit {
  board: SportsBoard[];
  currentUser: User;
  constructor(private userService: UserService, private sportBoardService: SportsBoardService) { }

  ngOnInit(): void {
    this.sportBoardService.GetBoard().subscribe(
      (response: any) => {
        console.log(response);
        this.board = response;
      })
      ;
      this.userService.GetCurrentUser().subscribe(
        (response: any) => {
          console.log(response);
          this.currentUser = response;
        })
  }

  DeletePost(id: number) {
    this.sportBoardService.DeletePost(id);
    let post = this.board.filter( (p: SportsBoard) => p.postId == id);
    let index = this.board.indexOf(post[0]);
    this.board.splice(index,1);
  }

}

/*
 ngOnInit() {
    this.userService.GetCurrentUser().subscribe(
      (response: any) => {
        console.log(response);
        this.currentUser = response;
      })
  }
  */
