import { Component, Input, OnInit, Output } from '@angular/core';
import { SportsBoardService } from '../sports-board.service';
import { SportsBoard } from '../SportsBoard';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
  providers: [SportsBoardService, UserService]

})
export class CreatePostComponent implements OnInit {

  @Output() board;
  currentUser: User;
  newPost: SportsBoard = { userId: 0, postBody: "", postId: 0 };

  constructor(private createPost: SportsBoardService, private userPost: UserService) { }

  ngOnInit() {
    this.userPost.GetCurrentUser().subscribe(
      (response: any) => {
        console.log(response);
        this.currentUser = response;
        this.newPost.userId = this.currentUser.userId;
      })
  }

  Submit() {

    this.createPost.NewPost(this.newPost);
    this.createPost.GetBoard().subscribe(
      (response:any) => {this.board = response}
    );
    location.reload();
  }
}
