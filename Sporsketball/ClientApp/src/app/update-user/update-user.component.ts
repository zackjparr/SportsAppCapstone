import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
  providers: [UserService]
})
export class UpdateUserComponent implements OnInit {

  currentUser: User;

  constructor(private userService: UserService, private route: Router) { 
    
  }

  ngOnInit() {
    this.userService.GetCurrentUser().subscribe(
      (response:any) => { console.log(response);
        this.currentUser = response;
      })
  }

  Submit() {
    this.userService.UpdateUser(this.currentUser);
    this.route.navigate(['']);
  }
}
