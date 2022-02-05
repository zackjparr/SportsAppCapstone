import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
currentUser: User;

  constructor(private userService: UserService) {
     this.userService.GetCurrentUser().subscribe(
      (response:any) => { console.log(response);
        this.currentUser = response;
     });

  }

  ngOnInit() {
    let loginPanel = document.getElementById("login");
    if(this.currentUser === null){
      loginPanel.style.display = "";
    }
  }
}
