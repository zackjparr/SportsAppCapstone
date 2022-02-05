import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User} from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  loginData: User = {userId: 0, username: "", password: "", displayName: "", avatar: "", email:""};

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
  }

  Login(){
    this.userService.LoginUser(this.loginData);
    this.route.navigate(['']).then( () =>
     {window.location.reload();}
    );
  }

}
