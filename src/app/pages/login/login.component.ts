import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/services/login.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
              private notifService: NotificationService,
              private router: Router) { }

  ngOnInit(): void {
  }

  signInWithGitHub(): void {
    this.loginService.signInWithGitHub()
      .then(
        (_succ) => {
          this.loginService.isLoggedIn = true;
          this.router.navigateByUrl('/home');
          this.notifService.showSuccess("Successfully logged in");
        }
      ).catch(
        (_err) => {
          this.notifService.showError("There was a problem loggin in, please try again later");
        }
      );
  }

}
