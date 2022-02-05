import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [UserService]
})
export class CreateUserComponent implements OnInit {

  newUser: User = { userId: 0, username: "", password: "", displayName: "", avatar: "none.jpg", email: "" };

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  Submit() {
    this.userService.CreateUser(this.newUser);
  }
}
