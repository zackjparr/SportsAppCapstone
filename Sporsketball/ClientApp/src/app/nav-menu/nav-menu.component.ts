import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  providers: [UserService]
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  current : User;
  constructor(private userService: UserService) {

  }
  ngOnInit() {
    this.userService.GetCurrentUser().subscribe(
      (response:any) => { this.current = response;}
    );
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  Logout (){
    this.userService.Logout();
    location.reload();
  }
}
